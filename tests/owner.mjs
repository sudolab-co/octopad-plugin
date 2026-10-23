// Test fixture: a fake claude process. It runs the steps given as JSON in argv[2]
// with itself as the owner (the scripts' parent, or their shell's parent) and prints
// one JSON result per `hook` or `header` step on stdout.
//   { "run": "hook" | "header", "script": path, "stdin": string, "env": {...},
//     "viaShell": bool, "delayMs": n, "background": bool }
//   { "writeRecord": { "dir": path, "start": string, "value": string } }
//   { "wait": true }   waits for every background step
import { spawn } from 'node:child_process';
import { writeFileSync } from 'node:fs';

const steps = JSON.parse(process.argv[2]);
const results = [];
const background = [];
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

function run(step) {
  return new Promise((resolve) => {
    const argv = step.viaShell
      ? ['/bin/sh', ['-c', `/bin/sh "${step.script}" ${step.run}; exit 0`]]
      : ['/bin/sh', [step.script, step.run]];
    const t0 = process.hrtime.bigint();
    const child = spawn(argv[0], argv[1], { env: step.env, stdio: ['pipe', 'pipe', 'pipe'] });
    let stdout = '';
    let stderr = '';
    child.stdout.on('data', (d) => (stdout += d));
    child.stderr.on('data', (d) => (stderr += d));
    child.on('close', (code) => {
      const ms = Number(process.hrtime.bigint() - t0) / 1e6;
      resolve({ run: step.run, code, stdout, stderr, ms });
    });
    child.stdin.end(step.stdin ?? '');
  });
}

for (const step of steps) {
  if (step.writeRecord) {
    const { dir, start, value } = step.writeRecord;
    writeFileSync(`${dir}/${process.pid}.json`, JSON.stringify({ pid: process.pid, start, value }) + '\n', { mode: 0o600 });
    continue;
  }
  if (step.wait) {
    results.push(...(await Promise.all(background.splice(0))));
    continue;
  }
  if (step.delayMs) await sleep(step.delayMs);
  if (step.background) background.push(run(step));
  else results.push(await run(step));
}
results.push(...(await Promise.all(background)));
process.stdout.write(JSON.stringify({ pid: process.pid, results }));
