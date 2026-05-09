const CACHE_NAME = 'whm-scan-v1';
// Thêm ./ để trình duyệt tìm file ngay tại thư mục hiện tại của App
const urlsToCache = ['./', './index.html', './manifest.json'];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('Caching app shell...');
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
