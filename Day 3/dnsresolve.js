
const dns = require('dns');
dns.resolve4('www.mum.edu', (error, data)=> console.log(data));

