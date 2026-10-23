// Tests for plugins/octopad/claude-session/claude-session.sh (the Claude Code
// SessionStart hook and the Octopad server's headersHelper). Node built-ins only:
//   node --test tests/
// Each script runs as `/bin/sh <path> <mode>` in a cleared environment, under a fake
// claude process (tests/owner.mjs). Every run must exit 0 with empty stderr.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { createHash, randomUUID } from 'node:crypto';
import { chmodSync, existsSync, lstatSync, mkdirSync, mkdtempSync, readFileSync, readdirSync, realpathSync, symlinkSync, utimesSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const SCRIPT = join(ROOT, 'plugins/octopad/claude-session/claude-session.sh');
const OWNER = join(ROOT, 'tests/owner.mjs');
const UID = process.getuid();
const AT_ONCE_MS = 100;
const NO_HEADER = '{}\n';

const digest = (sid) => createHash('sha256').update(`octopad-claude-session:${sid}`).digest('hex');
const header = (sid) => `{"x-octopad-claude-session":"${digest(sid)}"}\n`;
const payload = (sid, event = 'SessionStart', extra = {}) =>
  JSON.stringify({ session_id: sid, transcript_path: `/tmp/x/${sid}.jsonl`, cwd: '/tmp/x', hook_event_name: event, source: 'startup', ...extra });

function sandbox() {
  const tmp = realpathSync(mkdtempSync(join(tmpdir(), 'octopad-claude-test-')));
  return { tmp, dir: join(tmp, `octopad-claude-${UID}`), env: (extra = {}) => ({ PATH: '/usr/bin:/bin', TMPDIR: tmp, ...extra }) };
}

// A copy of the script whose fixed PATH starts with a folder of fake tools.
function scriptWithFakes(tmp, fakes) {
  const bin = join(tmp, 'fakebin');
  mkdirSync(bin, { recursive: true });
  for (const [name, body] of Object.entries(fakes)) {
    writeFileSync(join(bin, name), `#!/bin/sh\n${body}\n`, { mode: 0o755 });
  }
  const src = readFileSync(SCRIPT, 'utf8');
  const fixed = 'PATH=/usr/bin:/bin:/usr/sbin:/sbin';
  assert.ok(src.includes(`\n${fixed}\n`), 'the script sets its own PATH');
  const copy = join(tmp, 'claude-session.sh');
  writeFileSync(copy, src.replace(`\n${fixed}\n`, `\nPATH=${bin}:/usr/bin:/bin:/usr/sbin:/sbin\n`));
  return copy;
}

// A fake sleep that counts its calls, then sleeps (or fails).
const countingSleep = (tmp, fail = false) => ({ sleep: `echo x >> "${tmp}/sleeps"\n${fail ? 'exit 1' : 'exec /bin/sleep "$@"'}` });
const sleeps = (tmp) => (existsSync(join(tmp, 'sleeps')) ? readFileSync(join(tmp, 'sleeps'), 'utf8').split('\n').filter(Boolean).length : 0);

function owner(steps) {
  const r = spawnSync(process.execPath, [OWNER, JSON.stringify(steps)], { encoding: 'utf8', env: { PATH: '/usr/bin:/bin' } });
  assert.equal(r.status, 0, r.stderr);
  const out = JSON.parse(r.stdout);
  for (const res of out.results) {
    assert.equal(res.code, 0, `${res.run} exits 0`);
    assert.equal(res.stderr, '', `${res.run} writes nothing on stderr`);
    if (res.run === 'hook') assert.equal(res.stdout, '', 'the hook prints nothing');
  }
  return out;
}

const hookStep = (s, sid, extra = {}) => ({ run: 'hook', script: SCRIPT, stdin: payload(sid), env: s.env(), viaShell: true, ...extra });
const headerStep = (s, extra = {}) => ({ run: 'header', script: SCRIPT, env: s.env(), ...extra });
const records = (dir) => (existsSync(dir) ? readdirSync(dir).filter((n) => n.endsWith('.json')) : []);

// A record left by an earlier session, so the helper knows hooks run on this machine.
function seedEarlierRecord(dir) {
  mkdirSync(dir, { recursive: true, mode: 0o700 });
  chmodSync(dir, 0o700);
  writeFileSync(join(dir, '1.json'), JSON.stringify({ pid: 1, start: 'seed', value: '0'.repeat(64) }) + '\n', { mode: 0o600 });
}

test('hook then helper in one claude process: the header is the digest of its session id', () => {
  const s = sandbox();
  const sid = randomUUID();
  const out = owner([hookStep(s, sid), headerStep(s)]);
  assert.equal(out.results[1].stdout, header(sid));
  assert.equal(lstatSync(s.dir).mode & 0o777, 0o700);
  const rec = join(s.dir, `${out.pid}.json`);
  assert.equal(lstatSync(rec).mode & 0o777, 0o600);
  const saved = JSON.parse(readFileSync(rec, 'utf8'));
  assert.equal(saved.pid, out.pid);
  assert.equal(saved.value, digest(sid));
  assert.ok(!readFileSync(rec, 'utf8').includes(sid), 'the raw session id is never stored');
});

test('helper started before the hook picks up the record written within its wait', () => {
  const s = sandbox();
  seedEarlierRecord(s.dir);
  const sid = randomUUID();
  const out = owner([headerStep(s, { background: true }), hookStep(s, sid, { delayMs: 400 }), { wait: true }]);
  const helper = out.results.find((r) => r.run === 'header');
  assert.equal(helper.stdout, header(sid));
});

test('missing or empty records folder: {} at once', () => {
  const s = sandbox();
  let out = owner([headerStep(s)]);
  assert.equal(out.results[0].stdout, NO_HEADER);
  assert.ok(out.results[0].ms < AT_ONCE_MS, `missing folder took ${out.results[0].ms} ms`);
  mkdirSync(s.dir, { mode: 0o700 });
  out = owner([headerStep(s)]);
  assert.equal(out.results[0].stdout, NO_HEADER);
  assert.ok(out.results[0].ms < AT_ONCE_MS, `empty folder took ${out.results[0].ms} ms`);
});

test('a record of another (dead) process but none for the owner: {} after 40 polls', () => {
  const s = sandbox();
  seedEarlierRecord(s.dir);
  const dead = spawnSync('/bin/sh', ['-c', 'echo $$']).stdout.toString().trim();
  writeFileSync(join(s.dir, `${dead}.json`), JSON.stringify({ pid: Number(dead), start: 'Thu Jan  1 00:00:00 2026', value: digest(randomUUID()) }) + '\n', { mode: 0o600 });
  const script = scriptWithFakes(s.tmp, countingSleep(s.tmp));
  const out = owner([headerStep(s, { script })]);
  assert.equal(out.results[0].stdout, NO_HEADER);
  assert.equal(sleeps(s.tmp), 40);
  assert.ok(out.results[0].ms < 9000, `waited ${out.results[0].ms} ms, under Claude Code's 10 s limit`);
});

test("reused PID: a record for the owner's PID with another start time is never used", () => {
  const s = sandbox();
  seedEarlierRecord(s.dir);
  const script = scriptWithFakes(s.tmp, countingSleep(s.tmp));
  const out = owner([{ writeRecord: { dir: s.dir, start: 'Thu Jan  1 00:00:00 2026', value: digest(randomUUID()) } }, headerStep(s, { script })]);
  assert.equal(out.results[0].stdout, NO_HEADER);
  assert.equal(sleeps(s.tmp), 40);
});

test('hook and helper under different LC_ALL and TZ still match', () => {
  const s = sandbox();
  const sid = randomUUID();
  const out = owner([
    hookStep(s, sid, { env: s.env({ LC_ALL: 'fr_FR.UTF-8', LANG: 'fr_FR.UTF-8', TZ: 'Asia/Tokyo' }) }),
    headerStep(s, { env: s.env({ LC_ALL: 'en_US.UTF-8', TZ: 'America/Los_Angeles' }) }),
  ]);
  assert.equal(out.results[1].stdout, header(sid));
});

test("a helper inheriting another session's variables sends only its own owner's record", () => {
  const s = sandbox();
  const sidA = randomUUID();
  const a = owner([hookStep(s, sidA)]);
  const inherited = { CLAUDE_CODE_SESSION_ID: sidA, CLAUDE_CODE_HOST_SESSION_ID: sidA, CLAUDE_PID: String(a.pid) };
  const script = scriptWithFakes(s.tmp, countingSleep(s.tmp));
  const noOwnRecord = owner([headerStep(s, { script, env: s.env(inherited) })]);
  assert.equal(noOwnRecord.results[0].stdout, NO_HEADER);
  const sidB = randomUUID();
  const b = owner([hookStep(s, sidB), headerStep(s, { env: s.env(inherited) })]);
  assert.equal(b.results[1].stdout, header(sidB));
});

test('a failing sleep ends the wait with {}', () => {
  const s = sandbox();
  seedEarlierRecord(s.dir);
  const script = scriptWithFakes(s.tmp, countingSleep(s.tmp, true));
  const out = owner([headerStep(s, { script })]);
  assert.equal(out.results[0].stdout, NO_HEADER);
  assert.equal(sleeps(s.tmp), 1);
});

test('symlinked records folder: no record written, {} at once', () => {
  const s = sandbox();
  const real = join(s.tmp, 'elsewhere');
  mkdirSync(real, { mode: 0o700 });
  writeFileSync(join(real, '1.json'), '{}\n', { mode: 0o600 });
  symlinkSync(real, s.dir);
  const out = owner([hookStep(s, randomUUID()), headerStep(s)]);
  assert.deepEqual(records(real), ['1.json']);
  assert.equal(out.results[1].stdout, NO_HEADER);
  assert.ok(out.results[1].ms < AT_ONCE_MS, `took ${out.results[1].ms} ms`);
});

test('records folder open to group or others: no record written, {} at once', () => {
  for (const mode of [0o750, 0o705, 0o777]) {
    const s = sandbox();
    seedEarlierRecord(s.dir);
    chmodSync(s.dir, mode);
    const out = owner([hookStep(s, randomUUID()), headerStep(s)]);
    assert.deepEqual(records(s.dir), ['1.json'], `mode ${mode.toString(8)}`);
    assert.equal(out.results[1].stdout, NO_HEADER);
    assert.ok(out.results[1].ms < AT_ONCE_MS, `mode ${mode.toString(8)} took ${out.results[1].ms} ms`);
  }
});

test("someone else's records folder: no record written, {} at once", () => {
  const s = sandbox();
  // The folder name follows `id -u`; a fake id makes it a folder this user does not own.
  const script = scriptWithFakes(s.tmp, { id: 'echo 4242' });
  const foreign = join(s.tmp, 'octopad-claude-4242');
  mkdirSync(foreign, { mode: 0o700 });
  writeFileSync(join(foreign, '1.json'), '{}\n', { mode: 0o600 });
  const out = owner([hookStep(s, randomUUID(), { script }), headerStep(s, { script })]);
  assert.deepEqual(records(foreign), ['1.json']);
  assert.equal(out.results[1].stdout, NO_HEADER);
  assert.ok(out.results[1].ms < AT_ONCE_MS, `took ${out.results[1].ms} ms`);
});

test('malformed, non-UUID or non-SessionStart input writes no record', () => {
  const s = sandbox();
  const inputs = [
    '',
    'not json',
    '{"session_id": "',
    payload('not-a-uuid'),
    payload('12345678-1234-1234-1234-1234567890123'),
    payload('../../../../etc/passwd'),
    payload(`${randomUUID()}" , "x": "`),
    payload(randomUUID(), 'SubagentStart'),
    payload(randomUUID(), 'UserPromptSubmit'),
    JSON.stringify({ session_id: randomUUID(), source: 'startup' }),
  ];
  for (const stdin of inputs) owner([hookStep(s, null, { stdin })]);
  assert.deepEqual(records(s.dir), []);
});

test('Git Bash on Windows: the hook writes nothing and the helper prints {} at once', () => {
  const s = sandbox();
  seedEarlierRecord(s.dir);
  const script = scriptWithFakes(s.tmp, { uname: 'echo MINGW64_NT-10.0-19045' });
  const out = owner([hookStep(s, randomUUID(), { script }), headerStep(s, { script })]);
  assert.deepEqual(records(s.dir), ['1.json']);
  assert.equal(out.results[1].stdout, NO_HEADER);
  assert.ok(out.results[1].ms < AT_ONCE_MS, `took ${out.results[1].ms} ms`);
});

test('the hook removes records older than 7 days and keeps fresh ones', () => {
  const s = sandbox();
  seedEarlierRecord(s.dir);
  const old = join(s.dir, '2.json');
  writeFileSync(old, '{}\n', { mode: 0o600 });
  const tenDaysAgo = (Date.now() - 10 * 86400e3) / 1000;
  utimesSync(old, tenDaysAgo, tenDaysAgo);
  const sid = randomUUID();
  const out = owner([hookStep(s, sid), headerStep(s)]);
  assert.ok(!existsSync(old), 'the 10-day-old record is gone');
  assert.ok(existsSync(join(s.dir, '1.json')), 'a fresh record stays');
  assert.equal(out.results[1].stdout, header(sid));
});
