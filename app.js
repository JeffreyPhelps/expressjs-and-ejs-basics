// Creating basic URL routs with Express.js - Jeffrey Phelps 2018


// Initializing Express.js
var express = require("express");
var app = express();

// Calling the "public" folder into use, housing stylesheets, etc.
app.use(express.static("public"));



// ROUTS

// Creating the general homepage route
app.get("/", function(req, res){
    res.render("index.ejs"); // Rendering an ejs file from the views directory
});

// Creating a "fallinlovewith" route with "thing" variable
app.get("/fellinlovewith/:thing", function(req, res){
    var thing = req.params.thing;
    res.render("love.ejs", {thingVar: thing}); // Rendering the love.ejs file and accessing the thing variable from love.ejs in views directory
});

// Creating a "posts" route with a post title and author object array
app.get("/posts", function(req, res){
    var posts = [
            {title: "Post 1", author: "Jeffrey"},
            {title: "Post 2", author: "Nohemi"},
            {title: "Post 3", author: "Gabriel"},
    ]
    
    res.render("posts.ejs", {posts: posts})
});



// SERVER

// Creating server and logging successful connection
app.listen(process.env.PORT, process.env.IP, function(){
    console.log('Server is up and attem!');
});


