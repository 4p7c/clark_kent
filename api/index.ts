import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // Enable CORS
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, HEAD");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  // Handle OPTIONS preflight
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  // Manifest endpoint
  if (req.url === "/api/stremio/manifest.json" || req.url === "/manifest.json") {
    return res.status(200).json({
      id: "org.faselhd.stremio",
      version: "1.0.0",
      name: "FaselHD Stremio Addon",
      description: "Stream movies and series from FaselHD with Stremio integration",
      logo: "https://via.placeholder.com/256x256?text=FaselHD",
      background: "https://via.placeholder.com/1280x720?text=FaselHD+Streaming+Addon",
      types: ["movie", "series"],
      resources: [
        {
          name: "stream",
          types: ["movie", "series"],
          idPrefixes: ["tt"],
        },
      ],
      catalogs: [],
      behaviorHints: {
        configurable: true,
        configurationRequired: false,
      },
    });
  }

  // Health check
  if (req.url === "/api/health") {
    return res.status(200).json({ status: "ok", addon: "FaselHD Stremio Addon" });
  }

  // Stream endpoint placeholder
  if (req.url?.includes("/api/stremio/stream/")) {
    return res.status(200).json({ streams: [] });
  }

  // Default response
  return res.status(200).json({ message: "FaselHD Stremio Addon is running" });
}
