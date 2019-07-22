#! /usr/bin/env node

// Packages
const colors = require('colors');
const getRate = require('./request');

// Arguments
const chem = process.argv[2];
const dolar = process.argv[3];

console.log();

if (chem !== 'chem') {
  console.log('\t', 'po chem?'.red);
  return;
}

if (dolar !== 'dolar') {
  console.log('\t', 'po chem chto?'.red);
  return;
}

getRate((rate) => {
  console.log('\t', '1'.green, 'USD'.yellow, '=', rate.toString().green, 'UAH'.yellow);
});
