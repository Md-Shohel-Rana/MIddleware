const express = require('express');
const app = express();
const PORT=4000;

const myMiddleWare = (req,res,next)=>{
    console.log("Middleware function");

    req.currentTime = new Date(Date.now());
    next();
};

app.use(myMiddleWare);

app.use((req,res,next)=>{
    res.send("404 bad url request");
});
app.use((err,req,res,next)=>{
    res.status(500).send('Something broke!');
});



app.get('/', (req,res)=>{
    console.log(" Time and Date."+ req.currentTime);
    res.send("<h1>I am developer</h1>");
});
app.get('/about',(req,res)=>{
    console.log("I am About. "+ req.currentTime);
    res.send("<h1>I am about route</h1>");
});




app.listen(PORT,()=>{
    console.log(`server is running at http://localhost:${PORT}`);
});