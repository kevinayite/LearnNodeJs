const fs = require('fs');
// Create a file
// arguments in writeFile('name of the file', "content of the file", )
fs.writeFile('example.txt',"this is an example ", (err)=>{
    if(err)
        console.log(err);
    else{
        console.log('File successfully created');

        // arguments in readFile('name of the file', 'encoding of the file')
        fs.readFile('example.txt','utf8',(err, file)=>{
            if(err)
                console.log(err);
            else
                console.log(file);
        })
    }
        
});

// Renaming a file already existent

// fs.rename('example.txt', 'example2.txt', (err)=>{
//     if(err)
//         console.log(err);
//     else
//         console.log('successfully renamed the file');
// });

// Add something at the end of the file


// fs.appendFile('example2.txt', 'Some data being appended', (err)=>{
//     if(err)
//         console.log(err);
//     else
//         console.log('Successfully appended data at the end of the file');
// })


// Delete a file

fs.unlink('example2.txt', (err)=>{
    if(err)
        console.log(err);
    else
        console.log('Successfully deleted the file');
})