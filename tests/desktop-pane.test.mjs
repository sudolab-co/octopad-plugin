// Tests for plugins/octopad/desktop-pane/desktop-pane.sh (the Claude Code PostToolUse hook
// that reminds the AI to put the Octopad desktop on screen). Node built-ins only:
//   node --test tests/
// The script runs as `/bin/sh <path>` in a cleared environment. Every run must exit 0
// with empty stderr.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const SCRIPT = join(ROOT, 'plugins/octopad/desktop-pane/desktop-pane.sh');
const ORG = '56de32f3-76d0-4c65-a922-606e583c7164';

function run(stdin) {
  const out = spawnSync('/bin/sh', [SCRIPT], { input: stdin, env: { PATH: '/usr/bin:/bin' }, encoding: 'utf8' });
  assert.equal(out.status, 0, 'exit code');
  assert.equal(out.stderr, '', 'stderr');
  return out.stdout;
}

const navigate = (url, tool = 'mcp__Claude_Browser__navigate') => JSON.stringify({
  session_id: 'abc', hook_event_name: 'PostToolUse', tool_name: tool,
  tool_input: { url }, tool_response: [{ type: 'text', text: '{"tabId":"seed","navOk":true}\nBrowser pane opened.' }],
});

function reminds(stdout) {
  const parsed = JSON.parse(stdout);
  assert.equal(parsed.hookSpecificOutput.hookEventName, 'PostToolUse');
  const text = parsed.hookSpecificOutput.additionalContext;
  assert.match(text, /mcp__ccd_view__show_pane with pane "preview"/);
  assert.match(text, /mcp__Claude_Browser__tabs_context/);
  assert.match(text, /in no window/);
}

test('reminds after loading a desktop page or its sign-in link', () => {
  for (const url of [
    `https://octopad.app/org/${ORG}/desktop`,
    `https://staging.octopad.app/org/${ORG}/desktop?session=45b25633-fcf7-8c69-bd27-f038eb200e6a`,
    `https://staging.octopad.app/auth/desktop?org=${ORG}&session=45b25633#wdbnIufMJZprH9L1cI6F1A`,
    `http://localhost:3000/org/${ORG}/desktop`,
  ]) reminds(run(navigate(url)));
  reminds(run(navigate(`https://octopad.app/org/${ORG}/desktop`, 'mcp__Claude_Browser__preview_start')));
});

test('says nothing for any other address or input', () => {
  for (const stdin of [
    navigate('https://github.com/sudolab-co/octopad/pull/1'),
    navigate(`https://staging.octopad.app/workspace/${ORG}?task=1`),
    navigate(`https://octopad.app.evil.example/org/${ORG}/desktop`),
    navigate(`https://evil.example/?next=https://octopad.app/org/${ORG}/desktop`),
    navigate(`https://notoctopad.app/org/${ORG}/desktop`),
    navigate(`https://octopad-app/org/${ORG}/desktop`),
    navigate(`https://octopad.app/org/${ORG}/desktop-notes`),
    JSON.stringify({ tool_name: 'mcp__Claude_Browser__navigate', tool_input: {} }),
    'not json',
    '',
  ]) assert.equal(run(stdin), '', stdin);
});
