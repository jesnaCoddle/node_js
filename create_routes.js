import express from 'express';
const app=express();
const port=3001;

app.get('/',(req,res)=>{
    res.send('Hello World!');
});

app.get('/about',(req,res)=>{
    res.send('Welcome to about us page!');
});

app.get('/contact',(req,res)=>{
    res.send('Welcome to contact us page!');
});

app.get('*',(req,res)=>{
    res.status(404);
    res.send('<h1>404</h1>');
});

app.listen(port,() =>{
    console.log(`Server is running on PORT :${port} `);
});

