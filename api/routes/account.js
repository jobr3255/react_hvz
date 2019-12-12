var express = require("express");
var bodyParser = require("body-parser");
var router = express.Router();

var database = require("../database");

router.post("/signup", function(req, res) {
  //database.query('SELECT * from lockins', res);
  console.log("recieved signup post");
});

router.post('/test',function(req,res){
  var user_name=req.body.user;
  var password=req.body.password;
  console.log("User name = "+user_name+", password is "+password);
  res.end("yes");
});

router.post('/testpost',function(req,res){
  var user_name=req.body.username;
  var password=req.body.password;
  console.log(req.body);
  console.log("User name = "+user_name+", password is "+password);
  res.sendStatus(200);
});

// res.status(404).send('File not found')

module.exports = router;
