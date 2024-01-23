

const express =  require('express');
const mongoose = require('mongoose');

const app = express();

//routes 

app.get('/',(req, res)=>{
    res.send("<h1>Hello node API<h1/>");
})


mongoose.set("strictQuery",false);
mongoose.connect('mongodb://localhost:27017/todo-app-nodejs')
.then(()=>{
    console.log("Connected to database");
    app.listen(3000, ()=>{
        console.log("Node js server is runnig at port 3000");
    });
})
.catch((error)=>{
    console.log("Error", error);
})
