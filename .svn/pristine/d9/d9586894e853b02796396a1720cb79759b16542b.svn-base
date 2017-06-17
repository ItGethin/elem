var express = require('express');
var router = express.Router();

/* GET home page. */

var Host='';

router.use(function(req, res,next){
  Host="http://"+req.headers.host;
  next();
})

router.get('/', function(req, res, next) {
  res.render('admin/index',{
     host:Host
  })
});

module.exports = router;
