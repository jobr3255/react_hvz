var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About' });
});

/* GET rules page. */
router.get('/rules', function(req, res, next) {
  res.render('rules', { title: 'Rules' });
});

/* GET events page. */
router.get('/events', function(req, res, next) {
  res.render('events', { title: 'Events' });
});

/* GET signup page. */
router.get('/signup', function(req, res, next) {
  res.render('signup', { title: 'Signup' });
});

/* GET login page. */
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Login' });
});

/* GET admin page. */
router.get('/admin', function(req, res, next) {
  res.render('admin', { title: 'Admin' });
});

module.exports = router;
