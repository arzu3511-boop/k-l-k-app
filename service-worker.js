self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('windcalc-v1').then(cache => cache.addAll([
      './',
      './1.html',
      './manifest.json'
    ]))
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});
