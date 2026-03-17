/**
 * Configure ReadOPM to use Cloudflare R2 for images.
 * Run: node setup_r2_config.js [R2_PUBLIC_URL]
 * Example: node setup_r2_config.js https://pub-xxxxx.r2.dev
 *
 * Or edit this file and set R2_BASE_URL, then run: node setup_r2_config.js
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const configPath = path.join(__dirname, 'config.js');

const R2_BASE_URL = process.argv[2] || null; // Pass URL as first arg, or set here

function updateConfig(baseUrl) {
    let content = fs.readFileSync(configPath, 'utf8');

    if (!baseUrl) {
        content = content.replace(
            /const IMAGE_BASE_URL = '[^']*';/,
            "const IMAGE_BASE_URL = null;"
        );
        console.log('✓ Configured for local development (IMAGE_BASE_URL = null)');
    } else {
        const url = baseUrl.replace(/\/$/, ''); // trim trailing slash
        content = content.replace(
            /const IMAGE_BASE_URL = [^;]+;/,
            `const IMAGE_BASE_URL = '${url}';`
        );
        console.log(`✓ Configured for R2: ${url}`);
    }

    fs.writeFileSync(configPath, content);
}

console.log('\n🔧 ReadOPM R2 Configuration\n');

if (R2_BASE_URL) {
    updateConfig(R2_BASE_URL);
    console.log('\n✅ Config updated. Images will load from R2.');
} else {
    updateConfig(null);
    console.log('\n✅ Switched back to local paths.');
    console.log('\nTo use R2: node setup_r2_config.js https://pub-xxxxx.r2.dev');
}
