#! /usr/bin/env node

// Packages
const colors = require('colors');
const getRate = require('./request');

// Arguments
const byvniv = process.argv[2];
const value = Number(process.argv[3]);

console.log();

if (byvniv !== 'byvniv') {
  console.log('\t', 'Skilky chogo?'.red);
  return;
}

getRate((rate) => {
  console.log('\t', `${value}`.green, 'USD'.yellow, '=', (rate * value).toString().green, 'byvniv'.yellow);
});
