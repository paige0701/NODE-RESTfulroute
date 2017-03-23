var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var methodOverride = require('method-override');
var expressSanitizer = require('express-sanitizer')


// app config
mongoose.connect("mongodb://localhost/restful_blog_app")
app.set("view engine", "ejs")
app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended:true}))
app.use(expressSanitizer());
app.use(methodOverride('_method'));


// mongoose model config 
var blogSchema = new mongoose.Schema({
    title:String,
    image:String,
    body:String,
    created:{type:Date, default:Date.now}
})

var Blog = mongoose.model("Blog", blogSchema)

// Blog.create({
//     title:"My diary",
//     image:"url",
//     body:"This is the body"
// });


// RESTful routes 
app.get("/", function(req, res){
    
    res.redirect('/blogs')
});

// INDEX 
app.get("/blogs",function(req,res){
    Blog.find({}, function(err, blogs){
        if(err){
            console.log("THeres is an error")
        }else{
            res.render("index", {blogs:blogs})
        }
    })
});


// NEW
app.get("/blogs/new", function(req,res){
    res.render('new')
})

// CREATE
app.post('/blogs', function(req,res){
    
    // first argument in the parameter req.body.blog is what we are getting from the input name !
    // we named the input blog[title] we are getting the blog !! 
    console.log(req.body)
    req.body.blog.body = req.sanitize(req.body.blog.body)
    console.log('======')
    console.log(req.body)
   Blog.create(req.body.blog, function(err, newBlog){
       if(err){
           res.render('new')
       }else{
           res.redirect("/blogs")
       }
   })
})

// SHOW
app.get('/blogs/:id', function(req,res){
    
    Blog.findById(req.params.id, function(err, foundid){
        if(err){
            console.log(err)
        }else{
            res.render('show', {blog:foundid})
        }
        
    })
})

// EDIT
app.get('/blogs/:id/edit', function(req,res){
    
    Blog.findById(req.params.id, function(err, blog){
        if(err){
            res.redirect('/blogs')
        }else{
            res.render('edit', {blog:blog})
        }
    })
})

//UPDATE
app.put('/blogs/:id', function(req,res){
    // Blog.findByIdAndUpdate(id, newData, callBack)
    req.body.blog.body = req.sanitize(req.body.blog.body)
    Blog.findByIdAndUpdate(req.params.id, req.body.blog, function(err, updatedBlog){
        if(err){
            res.redirect('/blogs')
        }else{
            res.redirect('/blogs/'+req.params.id)
        }
    })
    
})


//DELETE
app.delete('/blogs/:id', function(req,res){
    
    Blog.findByIdAndRemove(req.params.id, function(err){
        if(err){
            res.redirect('/blogs')
        }else{
            res.redirect('/blogs')
        }
        
    })
})

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server started");
})

