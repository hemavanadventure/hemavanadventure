#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Copy the English HTML file to the dist/en directory after build
function setupEnglishRoutes() {
  const distPath = path.join(__dirname, '..', 'dist');
  const enPath = path.join(distPath, 'en');
  
  // Create en directory if it doesn't exist
  if (!fs.existsSync(enPath)) {
    fs.mkdirSync(enPath, { recursive: true });
  }
  
  // Copy built en.html to dist/en/index.html
  const englishHtmlSource = path.join(distPath, 'en.html');
  const englishHtmlDest = path.join(enPath, 'index.html');
  
  if (fs.existsSync(englishHtmlSource)) {
    fs.copyFileSync(englishHtmlSource, englishHtmlDest);
    console.log('✓ Built English page copied to dist/en/index.html');
  }
  
  // Create a simple redirect for /en routes in GitHub Pages
  const redirectScript = `
    <script>
      // Redirect to base path but preserve the /en prefix for the app
      if (window.location.pathname.startsWith('/en')) {
        const pathWithoutEn = window.location.pathname.substring(3) || '/';
        window.history.replaceState(null, null, '/en' + pathWithoutEn + window.location.search + window.location.hash);
      }
    </script>
  `;
  
  // Add redirect script to the English HTML
  let englishHtml = fs.readFileSync(englishHtmlDest, 'utf8');
  englishHtml = englishHtml.replace('</head>', redirectScript + '\n  </head>');
  fs.writeFileSync(englishHtmlDest, englishHtml);
  
  console.log('✓ Multilingual build setup complete');
}

setupEnglishRoutes();