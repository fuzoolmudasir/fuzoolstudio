const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const root = __dirname;
const types = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8', '.svg': 'image/svg+xml', '.png': 'image/png', '.woff2': 'font/woff2', '.txt': 'text/plain; charset=utf-8' };
http.createServer((req, res) => {
  let filename;
  try { const pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname); filename = path.resolve(root, '.' + (pathname === '/' ? '/index.html' : pathname)); } catch { res.writeHead(400); res.end('Bad request'); return; }
  const relative = path.relative(root, filename);
  if (relative.startsWith('..') || path.isAbsolute(relative) || !types[path.extname(filename)]) { res.writeHead(404); res.end('Not found'); return; }
  fs.readFile(filename, (error, data) => { if (error) { res.writeHead(404); res.end('Not found'); return; } res.writeHead(200, { 'Content-Type': types[path.extname(filename)] }); res.end(data); });
}).listen(8080, '127.0.0.1', () => console.log('FUZOOL STUDIO 001: http://127.0.0.1:8080'));

