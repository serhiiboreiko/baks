#! /usr/bin/env node

// Packages
const colors = require('colors');
const http = require('http');

// Arguments
const byvniv = process.argv[2];
const value = Number(process.argv[3]);

console.log();

if (byvniv !== 'byvniv') {
  console.log('Skilky chogo?');
  return;
}

getRate((rate) => {
  console.log('\t', `${value}`.green, 'USD'.yellow, '=', (USDUAH * value).toString().green, 'byvniv'.yellow);
});
