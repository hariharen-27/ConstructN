const product = require('./model2/geoModel');
const mongoose=require('mongoose');
const express=require('express');
const nested=require('./model3/nested')

    
const create= (req,res)=>{
    try{
        nested.create(req.body)
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
        nested.find({})
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
const update =(req,res)=>{
    const {id}=req.params;
    // console.log('it is the req body'+req.body.students[0].year);
    const uname=req.body.name;
    const ulocation=req.body.location;
    

nested.findByIdAndUpdate(id,{$set:{
    name:uname,
    location:ulocation
}})
.then((result)=>{
    console.log(result);
    res.send(result);
}).catch((err)=>{
    console.log(err)
})

}
const displayname=(req,res)=>{
    const {year}=req.params;
    nested.find({'students.year':year},{name:0 ,country:0})
    .then((result)=>{
        console.log(result) 
        //res.send(result);   
        res.send(JSON.stringify(result))
    })
    .catch((error)=>console.log(error))
}
module.exports = {
    create,
    display,
    update,
    displayname
}