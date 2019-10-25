var express = require("express");
var router = express.Router();

var database = require("../database");

router.get("/weeklongs", function(req, res, next) {
  database.query('SELECT * from weeklongs', res);
});

router.get("/lockins", function(req, res, next) {
  database.query('SELECT * from lockins', res);
});

module.exports = router;
