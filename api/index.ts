import express from "express";
import type { Express, Request, Response } from "express";
import stremioMiddleware from "../../server/stremio-middleware";

const app: Express = express();

// CORS middleware
app.use((req: Request, res: Response, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, HEAD");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }
  next();
});

app.use(express.json());

// Mount Stremio addon routes
app.use("/api/stremio", stremioMiddleware);

// Default health check
app.get("/api/health", (req: Request, res: Response) => {
  res.json({ status: "ok", addon: "FaselHD Stremio Addon" });
});

export default app;
