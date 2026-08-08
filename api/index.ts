import type { IncomingMessage, ServerResponse } from "http";

export default async function handler(
  req: IncomingMessage & { url?: string; method?: string },
  res: ServerResponse
) {
  // Enable CORS
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, HEAD");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.setHeader("Content-Type", "application/json");

  const url = req.url || "";

  // Handle OPTIONS preflight
  if (req.method === "OPTIONS") {
    return res.writeHead(200).end();
  }

  // Manifest endpoint - handle multiple path patterns
  if (
    url === "/api/stremio/manifest.json" ||
    url === "/manifest.json" ||
    url.endsWith("/manifest.json")
  ) {
    const manifest = {
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
    };
    res.writeHead(200, { "Content-Type": "application/json" });
    return res.end(JSON.stringify(manifest));
  }

  // Health check
  if (url.includes("/health")) {
    res.writeHead(200, { "Content-Type": "application/json" });
    return res.end(
      JSON.stringify({ status: "ok", addon: "FaselHD Stremio Addon" })
    );
  }

  // Stream endpoint
  if (url.includes("/stream/")) {
    res.writeHead(200, { "Content-Type": "application/json" });
    return res.end(JSON.stringify({ streams: [] }));
  }

  // Default 404 response with info
  res.writeHead(404, { "Content-Type": "application/json" });
  return res.end(
    JSON.stringify({
      error: "Not found",
      message: "FaselHD Stremio Addon - Use /api/stremio/manifest.json",
      path: url,
    })
  );
}
