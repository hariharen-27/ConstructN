const Blog=require('../models/blogs');


const blog_index = (req,res)=>{
    Blog.find().sort({createdAt:-1})
    .then((result)=>{   
        res.render('index',{title: 'All Blogs',blogs:result })

    })
    .catch((err)=>{console.log(err);})
}
const blog_detail=(req,res)=>{
    const id=req.params.id;
    console.log(id);
    Blog.findById(id)
    .then((result)=>{
        res.render('details',{blog:result, title: 'Blog Details'})
    })
    .catch((err)=>{console.log(err);})
}

const blog_create_get = (req, res) => {
    res.render('create',{title: 'create page'})
}

const blog_create_post = (req, res) => {
    console.log(req.body)
const blog=new Blog(req.body);
blog.save()
.then((result)=>{
    res.redirect('/blogs');
})
.catch((err)=>{
    console.log(err);
})

}

const blog_delete = (req,res)=>{
    const id=req.params.id;
    console.log(id);
    Blog.findByIdAndDelete(id)
    .then((result)=>{
        res.json({redirect: '/blogs'})
    })
    .catch((err)=>{console.log(err);})
}

const blog_update = (req,res)=>{
    
}

module.exports = {
    blog_index,
    blog_detail,
    blog_create_get,
    blog_create_post,
    blog_delete,
    blog_update
}