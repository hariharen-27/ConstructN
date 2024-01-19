// console.log("Hello World!");
// console.log(global);
// console.log(__dirname);
//import {people} from './people';


// const c=require('./people');
// console.log(c.people)
// console.log(c.age);
// const os=require('os');
// console.log(os)

// const fs=require('fs');
//reading files - async
// fs.readFile('./docs/myfile.txt',(err,data) =>{
// if(err){
//     console.log(err);
// }
// else{
//     console.log(data.toString());
// }
// })
// console.log("helloo");

// fs.writeFile('./docs/myfile.txt','Hello i m writing the file',() =>{

//     console.log('written file');
 
// })

const http = require('http');
const fs=require('fs');
const _ =require('lodash');

const server =http.createServer((req, res)=>{
//console.log(req.url,req.method);

const num=_.random(0,20);
console.log(num);
//set header content-type 
res.setHeader('Content-Type', 'text/html');
// res.write('<p>hello world</p>');
// res.write('<p>leaaring Node</p>');
// res.end();

const greet=_.once(()=>{
    console.log('lodash once method is used');
});
greet();
greet();


let path='./views/';
switch(req.url){
    case '/':
        path+='index.html';
        res.statusCode=200;
        break;
    case '/about':
        path+='about.html';
        res.statusCode=200;
        break;
    case '/about-me':
            res.setHeader('Location','/about');
            res.statusCode=301;
            
            break;
    default:
        path+='/404.html';
        res.statusCode=404;
        break;

}


res.setHeader('content-type','text/html');
fs.readFile(path,(err,data)=>{
    if(err){
        console.log(err);
        res.end();
    }
    else{
        //res.write(data);
        res.end(data);
    }

})


})
server.listen(3000,'localhost',()=>{
    console.log('server is running')
})