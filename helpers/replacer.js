const glob = require('glob');
const fs = require('fs');
const { result } = require('lodash');
const en = require('../src/i18n/en');

glob('src/**/*.{js,vue}', { }, (err, files) => {
  files.forEach((file) => {
    let content = fs.readFileSync(file, { encoding: 'utf-8' });

    const regex = /(i18n\.t\('|\$t\('|this\.t\(')(.*?)(')/gi;

    content = content.replace(regex, (...t) => {
      const val = result(en, t[2]);

      return `${t[1]}${val}${t[3]}`;
    });

    fs.writeFileSync(file, content);
  });
});
