/**
 * Dev Server for Tax Form Annotation Studio.
 */

import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { stripTypeScriptTypes } from "node:module";

const PORT = 3000;
const ROOT_DIR = process.cwd();

const MIME_TYPES: Record<string, string> = {
  ".html": "text/html",
  ".js": "application/javascript",
  ".ts": "application/javascript",
  ".tsx": "application/javascript",
  ".json": "application/json",
  ".css": "text/css",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".pdf": "application/pdf",
};

const server = http.createServer((req, res) => {
  let reqUrl: string = req.url || "/";
  if (reqUrl === "/") reqUrl = "/index.html";

  // Strip query strings
  reqUrl = reqUrl.split("?")[0] || "/index.html";

  const filePath = path.join(ROOT_DIR, reqUrl);

  if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end(`404 Not Found: ${reqUrl}`);
    return;
  }

  const ext = path.extname(filePath).toLowerCase();
  let contentType = MIME_TYPES[ext] || "application/octet-stream";

  try {
    let content = fs.readFileSync(filePath);

    // If TS file, strip TypeScript syntax using Node 22 native parser
    if (ext === ".ts" || ext === ".tsx") {
      let code = content.toString("utf8");
      code = code.replace(/^#!.*\n/, ""); // strip hashbang
      const stripped = stripTypeScriptTypes(code, { mode: "strip" });
      content = Buffer.from(stripped, "utf8");
      contentType = "application/javascript";
    }

    res.writeHead(200, {
      "Content-Type": contentType,
      "Access-Control-Allow-Origin": "*",
    });
    res.end(content);
  } catch (err: unknown) {
    console.error(`Error serving ${reqUrl}:`, err);
    res.writeHead(500, { "Content-Type": "text/plain" });
    res.end(`500 Server Error: ${(err as Error).message}`);
  }
});

server.listen(PORT, () => {
  console.log(`\n======================================================`);
  console.log(`  Tax Form Annotation Studio Dev Server Running!`);
  console.log(`  Local URL: http://localhost:${PORT}`);
  console.log(`======================================================\n`);
});
