self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('osiptel-v1').then((cache) => {
      return cache.addAll(['/osiptel.pe/index.html']);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});