/*

usage:
const express = require('express');  
const app = express();  
require(require.resolve('balloon-css').replace('balloon.min.css','express.js'))(app);
...

*/ 

var 
 
 path = require('path'),
 css_min_path=require.resolve('balloon-css'),
 base_path = path.dirname(css_min_path),
 css_path = path.join(base_path,"balloon.css");
 module.exports = function(app){
  app.get ("/balloon.css",function(req,res){
     res.sendFile(css_path);
  });
  app.get ("/balloon.min.css",function(req,res){
     res.sendFile(css_min_path);
  });
}