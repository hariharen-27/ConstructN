const product = require('./model2/geoModel');
const mongoose=require('mongoose');
const express=require('express');
const app = express();
const geo=require('./model2/geoModel')
    
const create= (req,res)=>{
    try{
        geo.create(req.body)
        .then((result)=>{
            console.log(result);
            res.send(result);
        })
        .catch((error)=>{
            console.log(error);
        })
        
    }
    catch(error){
        console.log(error.message)
        res.status(500).json({message: error.message});
    }
}

const display=(req,res)=>{
    try{
       geo.find({})
        .then((result)=>{
            console.log(result);
            res.send(result)})
            .catch((err)=>console.log(err))
       
    }
    catch(error){
        console.log(error.message)
        res.status(500).json({message: error.message});
    }
}


module.exports = {
    create,
    display
}