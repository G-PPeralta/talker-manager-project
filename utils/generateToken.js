const crypto = require('crypto'); // https://www.npmjs.com/package/crypto-js

const token = crypto.randomBytes(8).toString('hex'); // https://www.geeksforgeeks.org/node-js-crypto-randombytes-method/

module.exports = { token };