import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { createRequire } from "node:module";
import ts from "typescript";

const require = createRequire(import.meta.url);

// Exercise the actual TypeScript modules while isolating external services.
function loadTs(path, mocks = {}) {
  const source = readFileSync(new URL(`../${path}`, import.meta.url), "utf8");
  const { outputText } = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022, jsx: ts.JsxEmit.ReactJSX },
  });
  const module = { exports: {} };
  const localRequire = (name) => Object.hasOwn(mocks, name) ? mocks[name] : require(name);
  new Function("require", "module", "exports", outputText)(localRequire, module, module.exports);
  return module.exports;
}

const { createVisibleTimer } = loadTs("app/lib/visible-time.ts");
const analytics = loadTs("app/lib/analytics.ts");

test("visible time pauses while hidden and resumes without double-counting", () => {
  let now = 0;
  const timer = createVisibleTimer(() => now, true);
  now = 15000;
  assert.equal(timer.durationMs(), 15000);
  timer.setVisible(false);
  timer.setVisible(false);
  now = 120000;
  assert.equal(timer.durationMs(), 15000);
  timer.setVisible(true);
  timer.setVisible(true);
  now += 7000;
  timer.setVisible(false);
  assert.equal(timer.durationMs(), 22000);
});

test("a page opened in the background starts at zero", () => {
  let now = 0;
  const timer = createVisibleTimer(() => now, false);
  now = 90000;
  assert.equal(timer.durationMs(), 0);
  timer.setVisible(true);
  now += 3000;
  assert.equal(timer.durationMs(), 3000);
});

test("duration formatting handles seconds, minutes, and hours", () => {
  assert.equal(analytics.formatDuration(0), "0 s");
  assert.equal(analytics.formatDuration(65000), "1 min 5 s");
  assert.equal(analytics.formatDuration(3660000), "1 h 1 min");
});

test("the visitor table handles missing geography and filters by city", () => {
  const React = require("react");
  const { renderToStaticMarkup } = require("react-dom/server");
  const rows = [
    { sessionId: "sample-first", country: "CA", city: "Montréal", region: "QC", postalCode: null, source: "Google", device: "Desktop", startedAt: "2026-11-04T12:00:00Z", lastSeenAt: "2026-11-04T12:01:00Z", durationMs: 60000, pages: [{ path: "/portfolio", durationMs: 60000 }] },
    { sessionId: "sample-second", country: null, city: null, region: null, postalCode: null, source: "Direct", device: null, startedAt: "2026-11-04T12:00:00Z", lastSeenAt: "2026-11-04T12:00:00Z", durationMs: 0, pages: [{ path: "/", durationMs: 0 }] },
  ];
  const module = loadTs("app/admin/VisitorSessions.tsx", { "../lib/analytics": analytics });
  const markup = renderToStaticMarkup(React.createElement(module.default, { visitors: rows }));
  assert.match(markup, /Ville non disponible/);
  assert.match(markup, /1 min 0 s/);
  const filtered = loadTs("app/admin/VisitorSessions.tsx", {
    "../lib/analytics": analytics, react: { ...React, useState: () => ["Montréal", () => {}] },
  });
  const filteredMarkup = renderToStaticMarkup(React.createElement(filtered.default, { visitors: rows }));
  assert.match(filteredMarkup, /Montréal/);
  assert.doesNotMatch(filteredMarkup, /Ville non disponible/);
});

function trackHarness(configured = true) {
  const calls = [];
  const db = {
    isDatabaseConfigured: () => configured,
    ensureTables: async () => {},
    getSql: () => async (parts, ...values) => { calls.push({ text: parts.join("?"), values }); return []; },
  };
  const { POST } = loadTs("app/api/track/route.ts", { "../../lib/db": db, "../../lib/analytics": analytics });
  const request = (body, headers = {}) => POST(new Request("https://portfolio.example/api/track", {
    method: "POST", headers: { "content-type": "application/json", "user-agent": "Mozilla/5.0 Chrome/130", ...headers },
    body: JSON.stringify(body),
  }));
  return { request, calls, POST };
}

test("optional analytics returns 204 without querying an unconfigured database", async () => {
  const { request, calls } = trackHarness(false);
  assert.equal((await request({})).status, 204);
  assert.equal(calls.length, 0);
});

test("invalid JSON shapes and nonfinite durations are rejected before writes", async () => {
  const { request, calls, POST } = trackHarness();
  for (const body of [null, [], {}, { type: "duration", sessionId: "test", durationMs: "Infinity" }]) {
    assert.equal((await request(body)).status, 400);
  }
  assert.equal((await POST(new Request("https://portfolio.example/api/track", { method: "POST", body: "{" }))).status, 400);
  assert.equal(calls.length, 0);
});

test("admin paths and cross-site tracking are excluded", async () => {
  const { request, calls } = trackHarness();
  assert.equal((await request({ type: "visit", sessionId: "test", path: "/admin" })).status, 204);
  assert.equal((await request({ type: "visit", sessionId: "test", path: "/api/track" })).status, 204);
  assert.equal((await request({ type: "visit", sessionId: "test" }, { "sec-fetch-site": "cross-site" })).status, 403);
  assert.equal(calls.length, 0);
});

test("location comes from hosting headers, including percent-decoded Unicode", async () => {
  const { request, calls } = trackHarness();
  assert.equal((await request({ type: "visit", sessionId: "test", pageViewId: "view", city: "Fake client city" }, {
    "x-vercel-ip-city": "Montr%C3%A9al", "x-vercel-ip-country": "CA",
    "x-vercel-ip-country-region": "QC", "x-vercel-ip-postal-code": "H2X",
  })).status, 200);
  assert.ok(calls[0].values.includes("Montréal"));
  assert.ok(calls[0].values.includes("QC"));
  assert.ok(calls[0].values.includes("H2X"));
  assert.ok(!calls[0].values.includes("Fake client city"));
});

test("durations are bounded and legacy tabs can still report time", async () => {
  const { request, calls } = trackHarness();
  await request({ type: "duration", sessionId: "test", durationMs: -100 });
  assert.equal(calls[0].values.at(-1), 0);
  await request({ type: "duration", sessionId: "test", durationMs: 999999999 });
  assert.equal(calls[1].values.at(-1), 21600000);
});

test("client tracks each route and falls back when beacon delivery is refused", async () => {
  const originals = new Map();
  const install = (key, value) => {
    originals.set(key, Object.getOwnPropertyDescriptor(globalThis, key));
    Object.defineProperty(globalThis, key, { value, configurable: true, writable: true });
  };
  const listeners = new Map();
  const payloads = [];
  let now = 0;
  let effect;
  let dependencies;
  let heartbeat;
  const target = {
    visibilityState: "visible", referrer: "https://google.com/",
    addEventListener: (name, handler) => listeners.set(name, handler),
    removeEventListener: (name) => listeners.delete(name),
  };
  install("document", target);
  install("window", { ...target, location: { search: "" }, setInterval: (callback) => { heartbeat = callback; return 1; }, clearInterval: () => {} });
  install("performance", { now: () => now });
  install("sessionStorage", { getItem: () => { throw new Error("blocked storage"); } });
  install("navigator", { sendBeacon: () => false });
  install("fetch", async (_url, options) => { payloads.push(JSON.parse(options.body)); return new Response("{}"); });
  try {
    const { default: Analytics } = loadTs("app/components/Analytics.tsx", {
      react: { useEffect: (callback, deps) => { effect = callback; dependencies = deps; } },
      "next/navigation": { usePathname: () => "/portfolio" },
      "../lib/visible-time": { createVisibleTimer },
    });
    Analytics();
    assert.deepEqual(dependencies, ["/portfolio"]);
    const cleanup = effect();
    now = 15000;
    heartbeat();
    target.visibilityState = "hidden";
    listeners.get("visibilitychange")();
    now = 120000;
    target.visibilityState = "visible";
    listeners.get("visibilitychange")();
    now += 5000;
    cleanup();
    assert.equal(payloads[0].type, "visit");
    assert.equal(payloads.at(-1).durationMs, 20000);
    assert.equal(new Set(payloads.map((payload) => payload.pageViewId)).size, 1);
    assert.equal(listeners.size, 0);
  } finally {
    for (const [key, descriptor] of originals) {
      if (descriptor) Object.defineProperty(globalThis, key, descriptor);
      else delete globalThis[key];
    }
  }
});
