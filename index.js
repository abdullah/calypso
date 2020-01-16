#!/usr/bin/env node
/* eslint-disable import/no-dynamic-require */
const { merge } = require('lodash')
const path = require('path');
const yargs = require('yargs');
const extractor = require('./extractor');
const synchronizer = require('./synchronizer');

const options = yargs
  .usage('Usage: vi18n -c <config.js>')
  .option('c', {
    alias: 'config',
    describe: 'Config file',
  })
  .argv;

let defaultOptions = require('./defaultConfig');
let userOptions = {};

if (options.config) {
  const configPath = path.resolve(process.cwd(), options.config);
  userOptions = require(configPath);
}

const mergedOptions = merge(defaultOptions, userOptions)

extractor(mergedOptions)
  .then(() => {
    synchronizer(mergedOptions)
  })
