var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('boilerplate', { title: 'Bootswatch Express + Jade demo' });
});

module.exports = router;
