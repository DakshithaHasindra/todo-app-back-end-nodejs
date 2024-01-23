

const express =  require('express');
const mongoose = require('mongoose');
const Product = require('./models/productModel');
const app = express();


app.use(express.json());

//routes 

app.get('/',(req, res)=>{
    res.send("<h1>Hello node API<h1/>");
})

app.post('/task',async(req, res)=>{
    try {
        const product = await Product.create(req.body);
        res.status(200).json(product);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message});
    }
});


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
