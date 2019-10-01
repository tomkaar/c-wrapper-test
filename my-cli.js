#!/usr/bin/env node
"use strict";

const path = require('path');
const bootstrap = require('commitizen/dist/cli/git-cz').bootstrap;

const p = path.join(__dirname, '../node_modules/commitizen')

console.log('__dirname');
console.log(__dirname);

console.log('p');
console.log(p);

bootstrap({
  cliPath: p,
  // this is new
  config: {
    "path": "cz-conventional-changelog"
  }
});
