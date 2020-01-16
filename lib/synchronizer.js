/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
const fs = require('fs');
const path = require('path');
const { get, set, result } = require('lodash');
const { keyify } = require('./utils')

function create(fileName, root) {
  const defaultContent = JSON.stringify({});
  const filePath = path.resolve(process.cwd(), root, fileName);
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, defaultContent);
  }
}

function sync(fileName, base, root) {
  const updatedKeys = {};
  const primaryKeys = require(path.resolve(process.cwd(), root, base))
  const currenKeysPath = path.resolve(process.cwd(), root, fileName);
  const currenKeys = require(currenKeysPath)

  keyify(primaryKeys).forEach((key) => {
    const fallBackValue = get(primaryKeys, key);
    const value = result(currenKeys, key, fallBackValue);
    set(updatedKeys, [key], value);
  });

  fs.writeFileSync(currenKeysPath, JSON.stringify(updatedKeys, null, 2));
}

module.exports = (options) => {
  const { extra, languages, root } = options;

  languages.list.forEach(item => create(item, root))
  languages.list.forEach(item => sync(item, languages.base, root))

  if (extra) {
    extra.list.forEach(item => create(item, root))
    extra.list.forEach(item => sync(item, extra.base, root))
  }
}
