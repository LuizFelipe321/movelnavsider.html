
caches.open("app-saudacao-cache").then(cache => {
  return cache.addAll([
    "index.html",
    "manifest.json",
    "/icon-192.png",
    "/icon-512.png",
    "manha.jpg",
    "tarde.jpg",
    "noite.jpg",
    "madrugada.jpg"
  ]);
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
