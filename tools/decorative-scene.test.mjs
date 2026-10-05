import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";
import { runInNewContext } from "node:vm";
import ts from "typescript";

const compiled = ts.transpileModule(
  readFileSync(new URL("../app/lib/decorative-scene.ts", import.meta.url), "utf8"),
  { compilerOptions: { module: ts.ModuleKind.CommonJS } },
).outputText;

function setup({ idle = true, observer = true, matches = true } = {}) {
  const changes = [];
  const tasks = new Map();
  const mediaEvents = new Map();
  const documentEvents = new Map();
  let nextId = 0;
  let intersection;
  let disconnected = false;
  const schedule = callback => {
    const id = nextId++;
    tasks.set(id, callback);
    return id;
  };
  const media = {
    matches,
    addEventListener: (event, callback) => mediaEvents.set(event, callback),
    removeEventListener: event => mediaEvents.delete(event),
  };
  const document = {
    visibilityState: "visible",
    addEventListener: (event, callback) => documentEvents.set(event, callback),
    removeEventListener: event => documentEvents.delete(event),
  };
  const window = {
    matchMedia: () => media,
    setTimeout: schedule,
    clearTimeout: id => tasks.delete(id),
    ...(idle ? { requestIdleCallback: schedule, cancelIdleCallback: id => tasks.delete(id) } : {}),
  };
  const exports = {};
  runInNewContext(compiled, {
    exports, window, document,
    ...(observer ? { IntersectionObserver: class {
      constructor(callback) { intersection = callback; }
      observe() {}
      disconnect() { disconnected = true; }
    } } : {}),
  });
  const cleanup = exports.watchDecorativeScene({}, value => changes.push(value));
  return {
    changes, tasks, mediaEvents, documentEvents, cleanup,
    get disconnected() { return disconnected; },
    intersect: visible => intersection([{ isIntersecting: visible }]),
    media: value => { media.matches = value; mediaEvents.get("change")?.(); },
    visibility: value => { document.visibilityState = value; documentEvents.get("visibilitychange")?.(); },
    flush: () => { const callbacks = [...tasks.values()]; tasks.clear(); callbacks.forEach(callback => callback()); },
  };
}

test("WebGL is deferred, cancelled offscreen, and stopped in a background tab", () => {
  const scene = setup();
  assert.equal(scene.tasks.size, 0);
  scene.intersect(true);
  assert.equal(scene.tasks.size, 1);
  assert.deepEqual(scene.changes, []);
  scene.intersect(false);
  assert.equal(scene.tasks.size, 0);
  assert.equal(scene.changes.at(-1), false);
  scene.intersect(true);
  scene.flush();
  assert.equal(scene.changes.at(-1), true);
  scene.visibility("hidden");
  assert.equal(scene.changes.at(-1), false);
  scene.visibility("visible");
  assert.equal(scene.tasks.size, 1);
  scene.flush();
  assert.equal(scene.changes.at(-1), true);
  scene.intersect(false);
  assert.equal(scene.changes.at(-1), false);
  scene.cleanup();
});

test("motion preference or a small screen prevents mounting, including changes after mount", () => {
  const scene = setup({ matches: false });
  scene.intersect(true);
  assert.equal(scene.tasks.size, 0);
  assert.equal(scene.changes.at(-1), false);
  scene.media(true);
  scene.flush();
  assert.equal(scene.changes.at(-1), true);
  scene.media(false);
  assert.equal(scene.changes.at(-1), false);
  scene.media(true);
  scene.media(false);
  assert.equal(scene.tasks.size, 0);
  scene.cleanup();
});

test("timer fallback and queued callbacks cannot survive cleanup", () => {
  const scene = setup({ idle: false });
  scene.intersect(true);
  const pending = [...scene.tasks.values()][0];
  scene.cleanup();
  assert.equal(scene.tasks.size, 0);
  assert.equal(scene.mediaEvents.size, 0);
  assert.equal(scene.documentEvents.size, 0);
  assert.equal(scene.disconnected, true);
  pending();
  scene.intersect(true);
  assert.deepEqual(scene.changes, []);
});

test("without IntersectionObserver the lightweight static background is retained", () => {
  const scene = setup({ observer: false });
  assert.equal(scene.tasks.size, 0);
  assert.equal(scene.mediaEvents.size, 0);
  assert.equal(scene.documentEvents.size, 0);
  assert.deepEqual(scene.changes, []);
  scene.cleanup();
});
