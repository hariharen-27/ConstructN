const express= require('express');
const Blog=require('../models/blogs');
const router=express.Router();
const blogController =require('../controllers/blogController')


router.get('/add-blog',(req,res)=>{
    const blog= new Blog({
        title:'new blog 2',
        snippet:'about blog 2',
        body:'Lorem ipsum 2'
    });
    blog.save()
    .then((result)=>{
        res.send(result)
    })
    .catch((err)=>{
        console.log(err);
    })
})

router.get('/all-blog',(req,res)=>{
    Blog.find()
    .then((result)=>{
        res.send(result);

    })
    .catch((err)=>{
        console.log(err);
    })
})

router.get('/single-blog',(req,res)=>{
    console.log("entered single blog url")
    Blog.findById('6597967d4543e46c7fb0f4b6')

    .then((result)=>{
        res.send(result);
    })
    .catch((err)=>{
        console.log(err);
    })
})


router.get('/',blogController.blog_index);
router.get('/:id',blogController.blog_detail)
router.delete('/:id',blogController.blog_delete)
//router.patch('/:id',blogController.blog_update)
router.get('/blog/create',blogController.blog_create_get)
router.post('/',blogController.blog_create_post);

module.exports=router;