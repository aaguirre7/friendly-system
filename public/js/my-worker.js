// Global Veriables 
const APP_PREFIX = 'buget-tracker';
const VERSION = 'v_01';
const CACHE_NAME = APP_PREFIX+ VERSION;
// Files to be Cached 
const CACHE_FILES = [
    '/',
    '/index.html',
    '/js/index.js',
    '/js/idb.js',
    '/manifest.json',
    '/css/styles.css',
    '/icons/icon-72x72.png',
    '/icons/icon-96x96.png',
    '/icons/icon-128x128.png',
    '/icons/icon-144x144.png',
    '/icons/icon-152x152.png',
    '/icons/icon-192x192.png',
    '/icons/icon-384x384.png',
    '/icons/icon-512x512.png'  
];
// Installing Servive Worker (Files > precache > cache)
self.addEventListener('install',function (e) {
    e.waitUntil(
        caches.open(CACHE_NAME).then(function (cache){
            console.log('creating cache:' + CACHE_NAME)
            return cache.addAll(CACHE_FILES)
        })
    )
});

// Activate Worker
self.addEventListener('activate', function (e) {
    e.waitUntil(
      caches.keys().then(function (keyList) {
        let cacheKeeplist = keyList.filter(function (key) {
          return key.indexOf(APP_PREFIX);
        });
            cacheKeeplist.push(CACHE_NAME);
            // returns a promise that resolves once all old versions of the cache have been deleted 
            return Promise.all(keyList.map(function (key, i) {
                if (cacheKeeplist.indexOf(key) === -1) {
                console.log('deleting cache : ' + keyList[i] );
                return caches.delete(keyList[i]);
                }
            })
        );
    })
    )
  });
// Get Cached Info
self.addEventListener('fetch', function (e) {
    console.log('fetch request : ' + e.request.url)
    e.respondWith(
      caches.match(e.request).then(function (request) {
        if (request) { 
          console.log('responding with cache : ' + e.request.url)
        //   console.log(e.request.url)
          return request
        } else {       
          console.log('file is not cached, fetching : ' + e.request.url)
        //   console.log(e.request.url)
          return fetch(e.request)
        }
  
        // You can omit if/else for console.log & put one line below like this too.
        // return request || fetch(e.request)
      })
    )
});