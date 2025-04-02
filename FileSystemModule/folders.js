// In this file we are gonna deal with File System Module but for folders

const fs = require('fs');
// Creating a folder
fs.mkdir('tutorial', (err)=>{
    if(err)
        console.log(err);
    else
        //console.log('Folder successfully created');
        fs.rmdir('tutorial', (err)=>{
            if(err)
                console.log(err);
            else
                console.log('Folder successfully deleted');
        })

})

