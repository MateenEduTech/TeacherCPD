// Service Worker for Lesson Plan Builder PWA
// Caches all app assets for fully offline use

const CACHE_NAME = 'lesson-plan-builder-v1';

// Files to cache on install
const ASSETS_TO_CACHE = [
  './index.html',
  './manifest.json',
  './author.jpg'
];

// Install event: cache all assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(ASSETS_TO_CACHE);
    }).then(() => self.skipWaiting())
  );
});

// Activate event: clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(keyList.map((key) => {
        if (key !== CACHE_NAME) {
          console.log('[ServiceWorker] Removing old cache:', key);
          return caches.delete(key);
        }
      }));
    }).then(() => self.clients.claim())
  );
});

// Fetch event: serve from cache, fallback to network
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) {
        return response; // Return cached version
      }
      // Not in cache, try network
      return fetch(event.request).then((networkResponse) => {
        // Cache the new response for future
        if (networkResponse && networkResponse.status === 200) {
          const responseClone = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseClone);
          });
        }
        return networkResponse;
      }).catch(() => {
        // Network failed - return offline fallback if available
        return caches.match('./index.html');
      });
    })
  );
});
