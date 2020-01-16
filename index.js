#!/usr/bin/env node
/* eslint-disable import/no-dynamic-require */
const path = require('path');
const yargs = require('yargs');
const extractor = require('./lib/extractor');
const synchronizer = require('./lib/synchronizer');

const options = yargs
  .usage('Usage: i18n-extractor -c <config.js>')
  .option('c', {
    alias: 'config',
    describe: 'Config file',
    demandOption: true
  })
  .argv;

const configPath = path.resolve(process.cwd(), options.config);
const userOptions = require(configPath);

extractor(userOptions)
  .then(() => {
    synchronizer(userOptions)
  })
