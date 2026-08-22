/* ==========================================================================
   Service Worker for Abdullah Hossain PWA (Offline Support & Caching)
   ========================================================================== */

const CACHE_NAME = 'abdullah-portfolio-v1';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './packages.html',
  './manifest.json',
  './css/styles.css',
  './css/packages.css',
  './js/data.js',
  './js/app.js',
  './js/packages.js',
  './asset/logo.png',
  './asset/profile.png',
  './asset/img1.JPG',
  './asset/img2.JPG',
  './asset/img3.JPG',
  './sections/header.html',
  './sections/hero.html',
  './sections/about.html',
  './sections/experience.html',
  './sections/services.html',
  './sections/gallery.html',
  './sections/tech.html',
  './sections/github.html',
  './sections/projects.html',
  './sections/testimonials.html',
  './sections/faq.html',
  './sections/contact.html',
  './sections/footer.html'
];

// Install Event - Cache All Core Assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE).catch((err) => {
        console.warn('Non-critical cache item skipped:', err);
      });
    }).then(() => self.skipWaiting())
  );
});

// Activate Event - Clean Up Old Caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch Event - Stale-While-Revalidate Strategy
self.addEventListener('fetch', (event) => {
  // Only handle GET requests
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      const fetchPromise = fetch(event.request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200 && networkResponse.type === 'basic') {
            const responseToCache = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, responseToCache);
            });
          }
          return networkResponse;
        })
        .catch(() => cachedResponse); // Fallback to cache on network failure

      return cachedResponse || fetchPromise;
    })
  );
});
