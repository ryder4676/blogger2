// generateSecret.js
const { v4: uuidv4 } = require('uuid');

const randomSecret = uuidv4();
console.log(randomSecret);
