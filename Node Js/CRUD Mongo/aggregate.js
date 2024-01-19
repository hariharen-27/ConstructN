const product = require('./models/productModel');
const mongoose=require('mongoose');
const express=require('express');
const app = express();


//aggregation

// product.aggregate([
//         { $match : { name : 'pan cake' } }
//       ])
//       .then((result) => {console.log(result)})
//       .catch((err) => console.log(err))
    
//       product.aggregate([
//         { $project : { _id : 0, name : 1, price : 1, } }
//       ])
//       .then((result) => {console.log(result)})
//       .catch((err) => console.log(err))

//       product.aggregate([
//         { $group : { _id : '$name', totaldocs : {$sum : 1}, } }
//       ])
//       .then((result) => {console.log(result)})
//       .catch((err) => console.log(err))

// product.aggregate([
//     { $group : { _id : null, mycount : {$sum : 1} } },
//     { $project:{_id:0} }
//   ])
//   .then((result) => {console.log(result)})
//   .catch((err) => console.log(err))

//   product.aggregate([
//     { $match : { name : 'pan cake' } },
//     { $unwind : '$price' },
//     { $project : { _id : 0, 'name' : 1, 'price' : 1 } },
//     { $sort : { 'price' : -1 } },
//     { $limit: 2}
//   ],{ maxTimeMS:20000})
//   .then((result) => {console.log(result)})
//   .catch((err) => console.log(err))


// product.aggregate([
//     { $match : { name : 'pan cake' } },
//     { $addFields : { foundation_year : 1218 } }
//   ]).then((result)=>console.log(result))
//   .catch((err)=>console.log(err))

// product.aggregate([
//     { $unwind : '$name' },
//     { $count : 'total_documents' }
//   ]).then((result)=>console.log(result))
//   .catch((err)=>console.log(err))


//   product.aggregate([
//     {$bucketAuto:{
//             groupBy: "$price",
//             buckets:5,
//             output:{
//                 "name" : {$push: "$name"}
//             }
//         }
//     }
//   ])
//   .then((result)=>{
//     console.log(result)
//   })
//   .catch((err)=>console.log(err))

// product.aggregate([
//     {$bucket: {
//         groupBy: "$price", 
//         boundaries: [ 0,5,15],
//         default: "Above 10", 
//         output: { count: { $sum: 1 } } 
//     }}
// ]).then((result)=>{console.log(result)});

// product.aggregate([
//     { $sortByCount  : '$price'},
//     { $project : {  'name' : 1, 'price' : 1 } },
//     { $sort: {'_id': -1 } }

// ]).then((result)=>{console.log(result)})
//[ { _id: 10 }, { _id: 8 }, { _id: 5 }, { _id: 2 } ]

