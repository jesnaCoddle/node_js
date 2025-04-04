import { readFile, writeFile } from 'fs';

//read file

readFile('./test.txt','utf-8',function(err,data){
    if(err){
        console.error(err);
    }
    console.log(data);
})

// create file

writeFile('new.txt','this is a new file created by node.js',(err)=>{
    if(err){
        console.log(err);
    }
    console.log("file created");
});