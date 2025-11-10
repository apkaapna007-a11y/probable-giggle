self.addEventListener("install", (event) => {
  self.skipWaiting()
})

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim())
})

const CACHE_NAME = "nelsongpt-cache-v1"
const ASSETS = [
  "/",
  "/icons/icon-192.png",
  "/icons/icon-512.png",
  "/cover_nelsongpt.png",
]

self.addEventListener("fetch", (event) => {
  const { request } = event
  if (request.method !== "GET") return
  event.respondWith(
    caches.open(CACHE_NAME).then(async (cache) => {
      const cached = await cache.match(request)
      if (cached) return cached
      try {
        const response = await fetch(request)
        if (response && response.status === 200 && request.url.startsWith(self.location.origin)) {
          cache.put(request, response.clone())
        }
        return response
      } catch (err) {
        return cached || Response.error()
      }
    })
  )
})
