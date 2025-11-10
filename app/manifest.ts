import { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "NelsonGPT",
    short_name: "NelsonGPT",
    description:
      "Smart Pediatric AI Assistant — Clinical companion with Clinical/Academic modes",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#0B1220",
    theme_color: "#2563EB",
    orientation: "portrait-primary",
    icons: [
      {
        src: "/icons/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any maskable",
      },
      {
        src: "/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any maskable",
      },
    ],
    screenshots: [
      {
        src: "/cover_nelsongpt.png",
        sizes: "1536x1024",
        type: "image/png",
        form_factor: "wide",
      },
    ],
    shortcuts: [
      {
        name: "New Clinical Chat",
        short_name: "Clinical",
        url: "/?mode=clinical",
        description: "Start a clinical mode conversation",
      },
      {
        name: "New Academic Chat",
        short_name: "Academic",
        url: "/?mode=academic",
        description: "Start an academic mode conversation",
      },
    ],
    prefer_related_applications: false,
  }
}
