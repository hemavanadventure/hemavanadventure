// Inject built SPA assets (CSS/JS) into prerendered HTML pages in dist/
// This ensures prerendered route pages boot the React app when loaded directly

const fs = require('fs');
const path = require('path');

const distDir = path.resolve('dist');
const rootIndex = path.join(distDir, 'index.html');

if (!fs.existsSync(rootIndex)) {
  console.error('dist/index.html not found. Make sure the site is built before running this script.');
  process.exit(1);
}

const indexHtml = fs.readFileSync(rootIndex, 'utf8');

// Extract built CSS and JS tags from the built index.html
const cssTags = Array.from(indexHtml.matchAll(/<link[^>]+href="\/assets\/[^"']+\.css"[^>]*>/g)).map(m => m[0]);
const jsTags = Array.from(indexHtml.matchAll(/<script[^>]+src="\/assets\/[^"']+\.js"[^>]*><\/script>/g)).map(m => m[0]);

if (cssTags.length === 0 || jsTags.length === 0) {
  console.warn('Warning: Could not find built asset tags in dist/index.html');
}

const shouldSkip = (p) => {
  const rel = path.relative(distDir, p).replace(/\\/g, '/');
  if (!rel.endsWith('.html')) return true;
  // Skip SPA entry points
  if (rel === 'index.html') return true;
  if (rel === 'en/index.html') return true;
  return false;
};

const walk = (dir) => {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full);
    } else if (entry.isFile() && !shouldSkip(full)) {
      inject(full);
    }
  }
};

const dedupeInject = (html, tags) => {
  let out = html;
  for (const tag of tags) {
    // Only inject if that specific asset href/src is not already present
    const attr = tag.includes('href=') ? 'href' : 'src';
    const m = tag.match(new RegExp(attr + '="([^"]+)"'));
    const needle = m ? m[1] : null;
    if (needle && !out.includes(needle)) {
      out = out.replace('</head>', `  ${tag}\n</head>`);
    }
  }
  return out;
};

function inject(filePath) {
  let html = fs.readFileSync(filePath, 'utf8');

  // Remove any dev script tag that points to /src/main.tsx
  html = html.replace(/<script[^>]*src="\/?src\/main\.tsx"[^>]*>\s*<\/script>/g, '');

  if (!html.includes('</head>') || !html.includes('</body>')) {
    return; // Not a standard HTML file, skip
  }

  // Inject CSS into head
  if (cssTags.length) {
    html = dedupeInject(html, cssTags);
  }

  // Ensure #root exists for SPA mount; if not, add it before scripts
  if (!/#root["']?\)/.test(html) && !html.includes('id="root"')) {
    html = html.replace('</body>', '  <div id="root"></div>\n</body>');
  }

  // Inject JS before closing body
  for (const tag of jsTags) {
    const m = tag.match(/src="([^"]+)"/);
    const src = m ? m[1] : null;
    if (src && !html.includes(src)) {
      html = html.replace('</body>', `  ${tag}\n</body>`);
    }
  }

  fs.writeFileSync(filePath, html);
  console.log(`Injected SPA assets into: ${path.relative(distDir, filePath)}`);
}

walk(distDir);
console.log('✓ Injected SPA assets into prerendered pages');
