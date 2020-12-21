const staticCacheName = 'site-assets-static-1';
const count = 0;
const assets = [
    '/',
    '/index.html',
    '/script.js',
    '/style.css',
    '/logo.png',
    '/manifest.json',
    'https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css',
    'https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js',
    'https://unpkg.com/vue@3.0.4/dist/vue.global.js',
    'https://bus.matthewngan.ga/apple-icon-144x144-dunplab-manifest-25120.png',

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
    e.waitUntil(
        caches.keys().then(keys => {
            return Promise.all(keys
                .filter(key => key !== staticCacheName)
                .map(key => caches.delete(key))
            )
        })
    );
});

self.addEventListener('fetch', e => {
    // console.log('Fetch event', e)
    e.respondWith(
        caches.match(e.request).then(cacheRes => {
    //         if (e.request.url.includes('dsat.gov.mo')) {
    //             if (!cacheRes) {
    //                 return fetch(e.request).then(fetchRes => {
    //                     return caches.open("site-route-info-"+count).then(cache => {
    //                         cache.put(e.request.url, fetchRes.clone());
    //                         return fetchRes;
    //                     })
    //                 });
    //             }
    //             if (Date.now() > cacheRes.headers.get('date') + 15000) {
    //                 caches.delete("site-route-info-" + (count-1).toString());
    //             }
    //             if (cacheRes == undefined || Date.now() > cacheRes.headers.get('date') + 15000) {
                    
    //             }
    //         }
            return cacheRes || fetch(e.request.url);
        })
    )
});