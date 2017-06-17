var express = require('express');
var router = express.Router();

var bodyParser = require('body-parser');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

var DB = require('../../model/db');

var md5 = require('md5-node');
var session = require("express-session");

//设置session中间件
router.use(session({
  secret: 'keyboard cat',  /*加密方式*/
  resave: false,
  saveUninitialized: true
}));

var Host = '';

router.use(function (req, res, next) {
  Host = 'http://' + req.headers.host;
  next();
});

router.get('/', function (req, res) {

  res.render('admin/login',{
    host:Host
  })
});

router.post('/doLogin', function (req, res) {

  var username = req.body.username;
  var password = req.body.password;

  DB.find('admin',{'username':username,'password':password},function(err,data){
    if(err){
      console.log(err);
      return;
    }

    if(data.length > 0){
      session.userInfo=data[0];  /*所有的用户信息放在了 userInfo*/
      res.redirect(Host+'/admin/index');
    }else{
      res.send('<script>alert("用户名或密码错误");location.href="/admin/login"</script>');
    }
  })

});

module.exports = router;