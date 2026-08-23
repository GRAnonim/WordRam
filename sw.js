const CACHE = 'wordra-v1';
const CORE = [
  './', './index.html', './styles.css', './manifest.webmanifest', './sw.js',
  './main.js', './generator.js', './game.js', './storage.js', './data.js', './english.js'
];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(CORE)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;
  event.respondWith(caches.match(req).then(cached => cached || fetch(req).then(resp => {
    const copy = resp.clone();
    caches.open(CACHE).then(cache => cache.put(req, copy));
    return resp;
  }).catch(() => cached)));
});
