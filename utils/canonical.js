const crypto = require('crypto');

function canonicalStringify(obj) {
  // Use a controlled key-sort to ensure non-deterministic JS engines don't drift
  const allKeys = [];
  JSON.stringify(obj, (key, value) => {
    allKeys.push(key);
    return value;
  });
  allKeys.sort();
  return JSON.stringify(obj, allKeys, 2).replace(/\n/g, '\n');
}

function canonicalSha256(data) {
  return crypto.createHash('sha256').update(data).digest('hex');
}

module.exports = { canonicalStringify, canonicalSha256 };
