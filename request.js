// Packages
const http = require('http');

// Consts
const CURRENCY_SERVICE_API_KEY = 'dca86c49ab9a11316422ed8987ddb50a';

const getRate = (cb) => {
  http
    .get(`http://apilayer.net/api/live?access_key=${CURRENCY_SERVICE_API_KEY}`, (res) => {
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        const { quotes: { USDUAH } } = JSON.parse(data);
        cb(USDUAH);
      });
    })
    .on('error', (error) => {
      throw new Error(error);
      return;
    });
};

module.exports = getRate;
