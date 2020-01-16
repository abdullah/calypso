const fs = require('fs');
const { createExtractor } = require('./utils');
const path = require('path');

module.exports = (options) => {
  const { root, outputLanguage } = options;
  const { extractor, parse } = createExtractor(options);

  let extractPath = path.resolve(process.cwd(), root, outputLanguage);
  extractPath = extractPath + '.json'

  return parse()
    .then(() => {
      const messages = extractor.getMessages();

      const extractedMessages = messages.reduce((acc, message) => {
        acc[message.text] = message.text;

        return acc;
      }, {});

      fs.writeFileSync(extractPath, JSON.stringify(extractedMessages, null, 2));

      extractor.printStats();

      return Promise.resolve()
    });
}
