const fs = require('fs');
const { createExtractor } = require('./utils');
const path = require('path');

module.exports = (options) => {
  const { root, languages } = options;
  const { extractor, parse } = createExtractor(options);

  let extractPath = path.resolve(process.cwd(), root, languages.base);

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
