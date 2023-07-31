const fs = require('fs')

// const content = `content.\nCreated on ${Date.now()}`;
// fs.writeFileSync('./data.txt',content);
// console.log('file written');

const content2 = `second content.\nCreated on ${Date.now()}`;
fs.writeFileSync('./data.txt',content2);
console.log('file written');

// fs.writeFile('./data.txt')

//the second overwrote the first content.

//append 