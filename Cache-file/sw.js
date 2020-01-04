const CACHE_NAME = 'V1';
const STATIC_CACHE_URLS = ['index.html','public/css/styles.css', 'script.js'];

self.addEventListener('install', event => {
  console.log('Service Worker installing.');
  event.waitUntil(
    caches.open(CACHE_NAME)
    .then(cache => cache.addAll(STATIC_CACHE_URLS))  
  )
});

self.addEventListener('activate', event => {
    console.log('Service Worker activating.');
});
self.addEventListener('fetch', event => {
  // Stratégie Cache-First
  event.respondWith(
    caches.match(event.request) // On vérifie si la requête a déjà été mise en cache
    .then(cached => cached || fetch(event.request)) // sinon on requête le réseau
  );
});