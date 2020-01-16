/* eslint-disable import/no-extraneous-dependencies */
const fs = require('fs');
const path = require('path');
const { GettextExtractor, JsExtractors } = require('gettext-extractor');
const { decorateJSParserWithVueSupport, decorateExtractorWithHelpers } = require('gettext-extractor-vue');

module.exports.createExtractor = (options) => {
  const rootPath = path.resolve(process.cwd(), options.root);

  const extractor = decorateExtractorWithHelpers(new GettextExtractor());

  const jsParser = extractor.createJsParser([
    JsExtractors.callExpression('$t', {
      arguments: {
        text: 0,
      },
    }),
    JsExtractors.callExpression('this.$t', {
      arguments: {
        text: 0,
      },
    }),
    JsExtractors.callExpression('i18n.t', {
      arguments: {
        text: 0,
      },
    }),
  ]);

  const parser = decorateJSParserWithVueSupport(jsParser);

  return {
    extractor,
    parse: () => parser.parseFilesGlob(`${rootPath}/**/*.{js,vue}`, {
      ignore: '**/node_modules/**',
    }),
  };
};

module.exports.mkdirSync = (dirpath) => {
  try {
    fs.mkdirSync(dirpath);
  } catch (e) {
    if (e.code !== 'EEXIST') throw e;
  }
};

const keyify = (obj, prefix = '') => Object.keys(obj).reduce((res, el) => {
  if (Array.isArray(obj[el])) {
    return res;
  } if (typeof obj[el] === 'object' && obj[el] !== null) {
    return [...res, ...keyify(obj[el], `${prefix + el}.`)];
  }

  return [...res, prefix + el];
}, []);

module.exports.keyify = keyify