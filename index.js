#! /usr/bin/env node

// Packages
const colors = require('colors');
const getRate = require('./request');

// Arguments
const kiko = process.argv[2];
const dolar = process.argv[3];

console.log();

if (kiko === 'chem'){
  console.log('\t', 'Ti sho rusnia ?'.red);
  return;
}

if (kiko !== 'kiko') {
  console.log('\t', 'kiko?'.red);
  return;
}

if (dolar !== 'dolar') {
  console.log('\t', 'po kiko sho?'.red);
  return;
}

getRate((rate) => {
  console.log('\t', '1'.green, 'USD'.yellow, '=', rate.toString().green, 'UAH'.yellow);
});
