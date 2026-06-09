// PULSE Music Service Worker — v1.5
const CACHE = 'pulse-v1.5';
const PRECACHE = [
  './Pulse.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  'https://fonts.googleapis.com/css2?family=Anton&family=Outfit:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;600&display=swap',
];

// Install: cache shell
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE)
      .then(c => c.addAll(PRECACHE.map(u => new Request(u, {mode:'no-cors'}))))
      .then(() => self.skipWaiting())
  );
});

// Activate: clear old caches
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// Fetch: network-first for API, cache-first for assets
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  // API calls — always network
  if (url.hostname.includes('anthropic') || url.hostname.includes('itunes') ||
      url.hostname.includes('deezer') || url.hostname.includes('corsproxy')) {
    e.respondWith(fetch(e.request).catch(() => new Response('{"error":"offline"}', {headers:{'Content-Type':'application/json'}})));
    return;
  }
  // Assets — cache first
  e.respondWith(
    caches.match(e.request).then(cached => {
      if (cached) return cached;
      return fetch(e.request).then(res => {
        if (res && res.status === 200 && e.request.method === 'GET') {
          const clone = res.clone();
          caches.open(CACHE).then(c => c.put(e.request, clone));
        }
        return res;
      }).catch(() => caches.match('./Pulse.html'));
    })
  );
});
