self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("app-saudacao-cache").then(cache => {
      return cache.addAll([
        "index.html",
        "manifest.json",
        "/src/icons/icon-192.png",
        "/src/icons/icon-512.png",
        "manha.jpg",
        "tarde.jpg",
        "noite.jpg",
        "madrugada.jpg"
      ]);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});