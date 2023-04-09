var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Arcanno' });
});

router.get('/ephemeris', function(req, res, next) {
  res.render('ephemeris', { title: 'Efemérides' });
});

module.exports = router;
