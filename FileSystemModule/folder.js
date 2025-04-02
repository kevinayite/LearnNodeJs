// In this file we are going to create a folder and create a file in it


const fs = require('fs');
// Creating a folder
// fs.mkdir('tutorial', (err)=>{
//     if(err)
//         console.log(err);
//     else
//         fs.writeFile('./tutorial/test.txt','123',(err)=>{
//             if(err)
//                 console.log(err);
//             else 
//                 console.log('successfully created file');
//     })

// })


// Here we are trying to delete a folder which is not empty, it won't work
// fs.rmdir('tutorial',(err)=>{
//     if(err)
//         console.log(err);
//     else  
//         console.log('deleted folder');
// })

// To solve that, we need to delete the file in the folder
// fs.unlink('./tutorial/test.txt',(err)=>{
//     if(err)
//         console.log(err);
//     else{
//         fs.rmdir('tutorial',(err)=>{
//             if(err)
//                 console.log(err);
//             else
//                 console.log('deleted folder')
                
//         });        
//     }        
// })


// Here we are going to see how to delete multiple files from a folder

fs.readdir('example', (err,files)=>{ // here files will be an array contanning the names of our files from example folder
    if(err)
        console.log(err);
    else{
        for(let file of files){
            fs.unlink('./example/' + file, (err)=>{
                if(err)
                    console.log(err);
                else{
                    console.log('Successfully deleted file');
                }
            })
        }
    }
})