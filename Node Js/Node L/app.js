const express=require('express');
const morgan=require('morgan');
const app=express();
const fs = require('fs');
const { format } = require('date-fns');

const mongoose=require('mongoose');

const blogRoutes=require('./routes/blogRoutes'); 
const Blog=require('./models/blogs');

const dbURI='mongodb+srv://admin1:admin1@demo.ntnzqgx.mongodb.net/node?retryWrites=true&w=majority'
mongoose.connect(dbURI)
.then((result) => {console.log('connected to MongoDB'); app.listen(3000);})
.catch((err) => console.log('error connecting'))

app.set('view engine','ejs');
//if the folder name is not views then app.set('view','name')

//listen for requests

// Blog.aggregate([
//     { $match : { title : 'script 3' } }
//   ])
//   .then((result) => {console.log(result)})
//   .catch((err) => console.log(err))

//   Blog.aggregate([
//     { $project : { _id : 0, title : 1, snippet : 0 } }
//   ])
//   .then((result) => {console.log(result)})
//   .catch((err) => console.log(err))



//middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended:true}));
app.use(morgan('dev'));//GET /blogs/blog/create 304 11.881 ms - -
//app.use(morgan('tiny'));  //GET /blogs 304 - - 38.559 ms
//app.use(morgan('combined')); //::1 - - [08/Jan/2024:05:49:21 +0000] "GET /blogs HTTP/1.1" 304 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"  
//app.use(morgan('common'));  //::1 - - [08/Jan/2024:05:50:24 +0000] "GET /blogs HTTP/1.1" 304 -
//  app.use(morgan('short'));  //::1 - GET /blogs HTTP/1.1 304 - - 262.370 ms


app.use((req,res,next)=>{
    const dateTime = `${format(new Date(), 'yyyyMMdd\tHH:mm:ss')}`;
    const text=` ${req.method}${req.url} `;
    
    const filepath='./logs/reqLog.txt';

    fs.appendFile(filepath,text+dateTime+'\n',(err)=>{
        if(err){
            console.log(err);

        }
        console.log('text appended');
    })
    next();
})


//mongoose


app.get('/',(req,res)=>{
    //res.send('<p>home page</p>');
   // res.sendFile('./views/index.html',{ root: __dirname});
//    const blogs = [
//     {title: 'Yoshi finds egg', snippet: 'Lorem ipsum dolor sit amet consectetur'},
//     {title: 'Mario finds stars', snippet: 'Lorem  ipsum dolor sit amet consectetur'},
//     {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
//   ];
//    res.render('index',{title: 'Home page' , blogs});
res.redirect('/blogs');
})

app.get('/about',(req,res)=>{
    //res.send('<p>about page</p>');
    //res.sendFile('./views/about.html',{ root: __dirname});
    res.render('create',{title: 'about page'});

})

app.patch('/blogs/:id',(req,res)=>{
    const {id}=req.params;
    console.log(req.body)
    console.log("update blog")
    console.log(id);
    Blog.findByIdAndUpdate(id,req.body,{new:true})
   .then((result)=>{
    console.log(result);
    // res.json({redirect: '/blogs'})
    res.send(result)    
})
  .catch((err)=>{console.log(err);})
})
//routers
app.use('/blogs',blogRoutes);


//redirectingss

app.get('/about-me',(req,res)=>{
    res.redirect('/about');
});


//it should be in the bottom section
app.use((req,res)=>{
res.status(404).render('404',{title:'404'});
})