// Here we are reading the full content of the file
// const fs = require('fs'); // This line imports the fs module (short for File System), which is built into Node.js. It allows you to work with the file system on your machine — such as reading, writing, updating, and deleting files and directories.
// const readStram = fs.createReadStream('./example.txt', 'utf-8'); // fs.createReadStream() a method from the fs module used to read large files in chunks
// readStram.on('data', (chunk)=>{
//     console.log(chunk); // we are reading the content file by chunk not all at once
// })


// Here we are creating a new file named example2.txt and insert the same content of example.txt
const fs = require('fs');
const readStram = fs.createReadStream('./example.txt', 'utf-8');
const writeStream = fs.createWriteStream('example2.txt');
readStram.on('data', (chunk)=>{
    writeStream.write(chunk);
})


// Let us discuss why is it important to use fs.createReadStream() to read large file

// const fs = require('fs');
// fs.readFile('./largefile.txt',(err,file)=>{
//     if(err)
//         console.log(err);
//     else{
//         console.log(file);
//     }
// }) // For example in the tutorial, the size of the largefile.txt was about of 2,7 gb
// When we ran the above code, it ends in an error saying File size is greater than possible buffer
 