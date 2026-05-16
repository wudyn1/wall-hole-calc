var CACHE_NAME = 'wall-hole-calc-v4.1';
var URLS = ['./index.html', './manifest.json', './icon-192.png', './icon-512.png'];
self.addEventListener('install', function(e) { e.waitUntil(caches.open(CACHE_NAME).then(function(c) { return c.addAll(URLS); })); });
self.addEventListener('fetch', function(e) { e.respondWith(caches.match(e.request).then(function(r) { return r || fetch(e.request); })); });
self.addEventListener('activate', function(e) { e.waitUntil(caches.keys().then(function(ks) { return Promise.all(ks.filter(function(k) { return k !== CACHE_NAME; }).map(function(k) { return caches.delete(k); })); })); });
