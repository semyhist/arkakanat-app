// public/service-worker.js

const CACHE_NAME = 'arka-kanat-cache-v1';

// Install event: cache the app shell
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Service Worker: Caching App Shell');
        // Cache root and essential assets. The browser will cache other assets as they are requested.
        return cache.addAll([
          '/',
          '/index.html',
          '/favicon.ico',
          '/aklogo.png',
          '/manifest.json'
        ]);
      })
  );
});

// Fetch event: serve from cache first, then network
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Return from cache or fetch from network
        return response || fetch(event.request);
      })
  );
});

// Activate event: clean up old caches
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});


// Listen for messages from the client to schedule a notification
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SCHEDULE_NOTIFICATION') {
    const { title, options, timestamp } = event.data.payload;
    const now = Date.now();
    const delay = timestamp - now;

    console.log(`Service Worker: Notification scheduled in ${delay / 1000} seconds.`);

    if (delay > 0) {
      setTimeout(() => {
        // NOTE: This setTimeout is not guaranteed to execute if the browser or service worker is suspended.
        // A push server is the most reliable way to send timed notifications.
        self.registration.showNotification(title, options);
      }, delay);
    }
  }
});
