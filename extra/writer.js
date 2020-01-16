const fs = require('fs');
const { result } = require('lodash');
const { keyify } = require('../utils')

const en = require('../src/i18n/en');
const tr = require('../src/i18n/tr');

const transform = (lang) => keyify(lang).reduce((acc, key) => {
  const val = result(lang, key);
  const k = result(en, key);
  acc[k] = val;

  return acc;
}, {});

fs.writeFileSync('./src/i18n/en.json', JSON.stringify(transform(en), null, 2));
fs.writeFileSync('./src/i18n/tr.json', JSON.stringify(transform(tr), null, 2));
