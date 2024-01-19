const express=require('express');
const mongoose=require('mongoose');
const app = express();
const product = require('./models/productModel');
const aggregation=require('./aggregate');
const geojson=require('./geo');
const nested=require('./nested');


app.use(express.json());
app.use(express.urlencoded({ extended: false}))

app.use(( req,res,next)=>{
    aggregation;
    next();
})  


//routes
app.get('/', (req,res)=>{
    res.send('hello node')
})
//geojsons
app.post('/geo',geojson.create);
app.get('/geo',geojson.display);


//quering nested data
app.post('/nested',nested.create);
app.get('/nested',nested.display);
app.get('/nested/:year',nested.displayname);
app.put('/nested/:id',nested.update);


app.get('/blog', (req,res)=>{
    res.send('hello blog')
})

app.post('/products',async(req,res)=>{
    try{
        const Product = await product.create(req.body)
        res.status(200).json(Product);
    }
    catch(error){
        console.log(error.message)
        res.status(500).json({message: error.message});
    }
})

app.get('/products',async(req,res)=>{
    try{
        const Products = await product.find({})
        res.status(200).json(Products);
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
})

app.get('/products/:id',async(req,res)=>{
    try{
        const {id}=req.params
        const Products = await product.findById(id)
        res.status(200).json(Products);
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
});

app.put('/products/:id',async(req,res)=>{
    try{
        const {id}=req.params
        const Products = await product.findByIdAndUpdate(id,req.body);
        console.log(req.body);
        if(!product){
            return res.status(404).json({message: 'cannot find any product with id${id}'})
        }
        const updatedProduct = await product.findById(id);

        res.status(200).json(updatedProduct);
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
})

app.delete('/products/:id',async(req,res)=>{
    try{
        const {id}=req.params;
        const products=await product.findByIdAndDelete(id);
        if(!products){
            return res.status(404).json({message:'cannot find any product with id ${id}'});
        }
        res.status(200).json(products);
    }
    catch(error){
        console.log(error.message)
        res.status(500).json({message: error.message});
    }
})

mongoose.connect('mongodb://admin:admin@ac-8wfkzhy-shard-00-00.ntnzqgx.mongodb.net:27017,ac-8wfkzhy-shard-00-01.ntnzqgx.mongodb.net:27017,ac-8wfkzhy-shard-00-02.ntnzqgx.mongodb.net:27017/node-l?ssl=true&replicaSet=atlas-efa2mz-shard-0&authSource=admin&retryWrites=true&w=majority')
.then(()=>{
console.log('connected to MongoDB');
app.listen(3000,()=>{
    console.log('Node is running on port 3000')
});
}).catch((error)=>{
    console.log(error);
})      

