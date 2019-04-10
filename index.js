#! /usr/bin/env node

// Packages
const request = require('request-promise');
const colors = require('colors');

// Contsts
const CURRENCY_SERVICE_API_KEY = 'dca86c49ab9a11316422ed8987ddb50a';

// Arguments
// Call should always be 'po chem dolar'
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

request(`http://apilayer.net/api/live?access_key=${CURRENCY_SERVICE_API_KEY}`)
  .then((res) => {
    const { quotes: { USDUAH } } = JSON.parse(res);
    console.log('\t', '1'.green, 'USD'.yellow, '=', USDUAH.toString().green, 'UAH'.yellow);
  });
