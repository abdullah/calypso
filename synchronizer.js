/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
const fs = require('fs');
const path = require('path');
const { get, set, result } = require('lodash');
const { keyify } = require('./utils')

module.exports = (options) => {
  const { languages, root, outputFolder, outputLanguage } = options;

  let mainLanguagePath = path.resolve(process.cwd(), root, outputLanguage);
  mainLanguagePath = mainLanguagePath + '.json'

  const mainLanguage = require(mainLanguagePath);

  languages.forEach((language) => {
    const baseLanguagePath = path.resolve(process.cwd(), root, outputFolder, `${language}.json`);
    const defaultContent = JSON.stringify({});

    if (!fs.existsSync(baseLanguagePath)) {
      fs.writeFileSync(baseLanguagePath, defaultContent);
    }
  });

  languages.forEach((language) => {
    const updatedLanguageBase = {};

    const languageBasePath = path.resolve(process.cwd(), root, outputFolder, `${language}.json`);
    const languageBase = require(languageBasePath)

    keyify(mainLanguage).forEach((key) => {
      const fallBackValue = get(mainLanguage, key);
      const value = result(languageBase, key, fallBackValue);
      set(updatedLanguageBase, [key], value);
    });

    fs.writeFileSync(languageBasePath, JSON.stringify(updatedLanguageBase, null, 2));
  });
}
