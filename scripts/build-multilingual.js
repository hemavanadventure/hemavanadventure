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
  
  // Prefer the built en.html, fallback to the repo source index-en.html
  const builtEnHtml = path.join(distPath, 'en.html');
  const sourceEnHtml = path.join(__dirname, '..', 'index-en.html');
  const englishHtmlDest = path.join(enPath, 'index.html');

  let copied = false;
  if (fs.existsSync(builtEnHtml)) {
    fs.copyFileSync(builtEnHtml, englishHtmlDest);
    copied = true;
    console.log('✓ Copied built index-en.html → dist/en/index.html');
  } else if (fs.existsSync(sourceEnHtml)) {
    fs.copyFileSync(sourceEnHtml, englishHtmlDest);
    copied = true;
    console.log('✓ Copied source index-en.html → dist/en/index.html');
  } else {
    console.warn('⚠️ No English HTML source found. Skipping copy.');
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
  
  // Add redirect script to the English HTML if it exists
  if (fs.existsSync(englishHtmlDest)) {
    let englishHtml = fs.readFileSync(englishHtmlDest, 'utf8');
    if (!englishHtml.includes('Redirect to base path but preserve the /en prefix')) {
      englishHtml = englishHtml.replace('</head>', redirectScript + '\n  </head>');
      fs.writeFileSync(englishHtmlDest, englishHtml);
    }
    console.log('✓ Multilingual build setup complete');
  } else if (copied) {
    console.warn('⚠️ dist/en/index.html not found after copy. Skipping redirect injection.');
  }
}

setupEnglishRoutes();