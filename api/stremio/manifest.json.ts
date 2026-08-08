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

  // Handle OPTIONS preflight
  if (req.method === "OPTIONS") {
    return res.writeHead(200).end();
  }

  // Return manifest
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
