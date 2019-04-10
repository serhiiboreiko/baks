#! /usr/bin/env node

// Packages
const colors = require('colors');
const http = require('http');

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

http
  .get(`http://apilayer.net/api/live?access_key=${CURRENCY_SERVICE_API_KEY}`, (res) => {
    let data = '';

    res.on('data', (chunk) => {
      data += chunk;
    });

    res.on('end', () => {
      const { quotes: { USDUAH } } = JSON.parse(data);
      console.log('\t', '1'.green, 'USD'.yellow, '=', USDUAH.toString().green, 'UAH'.yellow);
    });
  })
  .on('error', (error) => {
    throw new Error(error);
    return;
  });
