// Keeps the Claude, Codex and Cursor distributions of plugins/octopad in step.
// Node built-ins only: node --test tests/
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const PLUGIN = join(ROOT, 'plugins', 'octopad');
const json = (path) => JSON.parse(readFileSync(path, 'utf8'));

const manifests = {
  claude: json(join(PLUGIN, '.claude-plugin', 'plugin.json')),
  codex: json(join(PLUGIN, '.codex-plugin', 'plugin.json')),
  cursor: json(join(PLUGIN, '.cursor-plugin', 'plugin.json')),
};

test('every manifest and octopad-session carry one version', () => {
  const session = readFileSync(join(PLUGIN, 'skills', 'octopad-session', 'SKILL.md'), 'utf8');
  const sessionVersion = session.match(/^Version: (\S+)\r?$/m)?.[1];
  assert.ok(sessionVersion, 'octopad-session has no Version: line');
  for (const [host, manifest] of Object.entries(manifests)) {
    assert.equal(manifest.version, sessionVersion, `${host} manifest version`);
  }
});

test('the manifests share name, description, author and repository', () => {
  for (const field of ['name', 'description', 'author', 'repository', 'license']) {
    assert.deepEqual(manifests.cursor[field], manifests.claude[field], `cursor ${field}`);
    assert.deepEqual(manifests.codex[field], manifests.claude[field], `codex ${field}`);
  }
});

test('each marketplace points at plugins/octopad', () => {
  const sources = [
    json(join(ROOT, '.claude-plugin', 'marketplace.json')).plugins[0].source,
    json(join(ROOT, '.cursor-plugin', 'marketplace.json')).plugins[0].source,
    json(join(ROOT, '.agents', 'plugins', 'marketplace.json')).plugins[0].source.path,
  ];
  for (const source of sources) assert.equal(source, './plugins/octopad');
});

test('the reminder hook calls turn_reminder on the plugin\'s own server, in Claude Code and Codex', () => {
  const server = Object.keys(json(join(PLUGIN, '.mcp.json')).mcpServers)[0];
  const handlers = (hooks) => (hooks.UserPromptSubmit ?? []).flatMap((entry) => entry.hooks);
  const claude = handlers(manifests.claude.hooks);
  assert.deepEqual(claude, [{ type: 'mcp_tool', server: `plugin:${manifests.claude.name}:${server}`, tool: 'turn_reminder', timeout: 10 }]);
  assert.equal(manifests.codex.hooks, './hooks.codex.json');
  assert.ok(!existsSync(join(PLUGIN, 'hooks', 'hooks.json')), 'Claude Code would also load hooks/hooks.json');
  const codex = handlers(json(join(PLUGIN, 'hooks.codex.json')).hooks);
  assert.deepEqual(codex, [{ type: 'mcp_tool', server, tool: 'turn_reminder', timeout: 10 }]);
});

test('the desktop pane hook runs after the Claude app Browser pane loads a page, in Claude Code only', () => {
  const entries = manifests.claude.hooks.PostToolUse ?? [];
  assert.deepEqual(entries, [{
    matcher: 'mcp__Claude_Browser__navigate|mcp__Claude_Browser__preview_start',
    hooks: [{ type: 'command', command: '/bin/sh "${CLAUDE_PLUGIN_ROOT}/desktop-pane/desktop-pane.sh"; exit 0', timeout: 10 }],
  }]);
  assert.ok(existsSync(join(PLUGIN, 'desktop-pane', 'desktop-pane.sh')));
  assert.equal(json(join(PLUGIN, 'hooks.codex.json')).hooks.PostToolUse, undefined);
});

test('the Cursor manifest references files that exist', () => {
  const { logo, skills, agents, mcpServers } = manifests.cursor;
  for (const path of [logo, skills, agents, mcpServers]) {
    assert.ok(existsSync(join(PLUGIN, path)), `missing ${path}`);
  }
});

test('the Cursor lane agents match the Claude lane agents', () => {
  const field = (text, name) => text.match(new RegExp(`^${name}: (.+?)\r?$`, 'm'))?.[1];
  const lanes = (dir) => readdirSync(join(PLUGIN, dir)).filter((file) => file.endsWith('.md')).sort();
  assert.deepEqual(lanes('cursor-agents'), lanes('agents'));
  for (const file of lanes('agents')) {
    const claude = readFileSync(join(PLUGIN, 'agents', file), 'utf8');
    const cursor = readFileSync(join(PLUGIN, 'cursor-agents', file), 'utf8');
    for (const name of ['name', 'description']) {
      assert.equal(field(cursor, name), field(claude, name), `${file} ${name}`);
    }
    assert.match(field(cursor, 'model') ?? '', /^claude-[a-z0-9-]+\[effort=[a-z]+\]$/, `${file} model`);
  }
});

test('the MCP configurations reach the same server', () => {
  const url = (file) => json(join(PLUGIN, file)).mcpServers.octopad.url;
  assert.equal(url('mcp.json'), url('.mcp.json'));
  assert.equal(url('.mcp.codex.json'), url('.mcp.json'));
});

test('every skill has name and description frontmatter', () => {
  const dir = join(PLUGIN, 'skills');
  for (const skill of readdirSync(dir)) {
    const text = readFileSync(join(dir, skill, 'SKILL.md'), 'utf8');
    assert.match(text, new RegExp(`^---\\r?\\nname: ${skill}\\r?\\n`), `${skill} name`);
    assert.match(text, /^description: \S/m, `${skill} description`);
  }
});
