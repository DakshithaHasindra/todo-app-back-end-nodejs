

const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/productModel');
const app = express();


app.use(express.json());

//routes 

app.get('/', (req, res) => {
    res.send("<h1>Hello node API<h1/>");
})

app.post('/tasks', async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(200).json(product);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
});

app.get('/tasks', async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
});

app.patch('/tasks/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);
        if(!product){
            return res.status(404).json({ message : `cannot find the product with ID ${id}`});
        }else{
           const updatedProduct =await Product.findById(id);
            return res.status(200).json(updatedProduct);
        }

    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
})


app.get('/tasks/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
});


mongoose.set("strictQuery", false);
mongoose.connect('mongodb://localhost:27017/todo-app-nodejs')
    .then(() => {
        console.log("Connected to database");
        app.listen(3000, () => {
            console.log("Node js server is runnig at port 3000");
        });
    })
    .catch((error) => {
        console.log("Error", error);
    })
