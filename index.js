#! /usr/bin/env node

// Packages
const colors = require('colors');
const http = require('http');

// Consts
const CURRENCY_SERVICE_API_KEY = 'dca86c49ab9a11316422ed8987ddb50a';

// Arguments
// User can call with be 'po chem dolar'
// Or be 'skilky byvniv'
const firstArg = process.argv[2];
const secondArg = process.argv[3];
const thirdArg = process.argv[4];

console.log();

const isRate = !process.argv.includes('--byvni');

if (!isRate && secondArg !== 'byvniv') {
  console.log('Skilky chogo?');
  return;
}

if (isRate && firstArg !== 'chem') {
  console.log('\t', 'po chem?'.red);
  return;
}

if (isRate && secondArg !== 'dolar') {
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
      if (isRate) {
        console.log('\t', '1'.green, 'USD'.yellow, '=', USDUAH.toString().green, 'UAH'.yellow);
      } else {
        console.log('\t', `${Number(thirdArg)}`.green, 'USD'.yellow, '=', (USDUAH * Number(thirdArg)).toString().green, 'byvniv'.yellow);
      }
    });
  })
  .on('error', (error) => {
    throw new Error(error);
    return;
  });
