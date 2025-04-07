// const fs = require('fs');
// const zlib = require('zlib');
// const gzip = zlib.createGzip();
// const readStram = fs.createReadStream('./example.txt', 'utf-8');
// const writeStream = fs.createWriteStream('example2.txt');
// readStram.on('data', (chunk)=>{
//     writeStream.write(chunk);
// })
// the above code commented is the equivalent of the following one
//readStram.pipe(writeStream); // So here the pipe is taking what we have read and read it

// Here in the following code, we are retrieving the content of example.txt and put it in a zip file
// const fs = require('fs');
// const zlib = require('zlib');
// const gzip = zlib.createGzip();
// const readStram = fs.createReadStream('./example.txt', 'utf-8');
// const writeStream = fs.createWriteStream('example2.txt.gz'); // I added the extension of a zip file
// readStram.pipe(gzip).pipe(writeStream);

// Now here we will do the reverse, from a zip file to an unzipped file
const fs = require('fs');
const zlib = require('zlib');
const gunzip = zlib.createGunzip();
const readStram = fs.createReadStream('./example2.txt.gz');
const writeStream = fs.createWriteStream('uncompressed.txt'); // I added the extension of a zip file
readStram.pipe(gunzip).pipe(writeStream);