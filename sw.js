const staticCacheName = 'site-assets-static';
const assets = [
    '/',
    '/index.html',
    '/script.js',
    '/style.css',
    '/logo.png',
    'https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css',
    'https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js',
    'https://unpkg.com/vue@3.0.4/dist/vue.global.js',
    'https://cors-anywhere.matthewngan.workers.dev/?https://bis.dsat.gov.mo:37812/macauweb/getRouteAndCompanyList.html',

];

self.addEventListener('install', e => {
    // console.log('ServiceWorker has been installed');
    e.waitUntil(
        caches.open(staticCacheName).then(cache => {
            cache.addAll(assets);
        })
    );
});

self.addEventListener('activate', e => {
    // console.log('ServiceWorker has been activated');
});

self.addEventListener('fetch', e => {
    // console.log('Fetch event', e)
    e.respondWith(
        caches.match(e.request).then(cacheRes => {
            return cacheRes || fetch(e.request);
        })
    )
});