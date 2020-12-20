self.addEventListener('install', e => {
    console.log('ServiceWorker has been installed');
})

self.addEventListener('activate', e => {
    console.log('ServiceWorker has been activated');
})

self.addEventListener('fetch', e => {
    console.log('Fetch event', e)
})