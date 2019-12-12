var express = require("express");
var router = express.Router();

var database = require("../database");

router.get("/weeklongs", function(req, res, next) {
  database.query('SELECT * from weeklongs', res);
});

router.get("/lockins", function(req, res, next) {
  database.query('SELECT * from lockins', res);
});

router.get("/lockin/:id", function(req, res, next) {
  var eventID = req.params.id;
  database.queryFetchSingle('SELECT * from lockins where id=' + eventID, res, "No lockin found with event id '" + eventID + "'");
});

module.exports = router;
