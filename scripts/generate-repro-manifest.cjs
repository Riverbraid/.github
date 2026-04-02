const fs = require('fs');
const path = require('path');
const { canonicalStringify, canonicalSha256 } = require('../utils/canonical');

const nodeVersion = fs.existsSync('.node-version') ? fs.readFileSync('.node-version', 'utf8').trim() : process.version;
const lockfileHash = fs.existsSync('package-lock.json') ? canonicalSha256(fs.readFileSync('package-lock.json')) : 'none';

const manifest = {
  node: nodeVersion,
  lockfile: lockfileHash,
  timestamp: new Date().toISOString().split('T')[0]
};

fs.writeFileSync('reproducibility-manifest.json', canonicalStringify(manifest));
console.log(`Manifest created: ${path.basename(process.cwd())}`);
