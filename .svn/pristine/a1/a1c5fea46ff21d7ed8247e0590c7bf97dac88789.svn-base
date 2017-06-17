/**
 * Created by Administrator on 2017/5/26 0026.
 */
var express = require('express');
var router = express.Router();

var user = require("./admin/user");

var login = require("./admin/login");

var article = require("./admin/article");

var products = require('./admin/products');

var articleclass = require("./admin/articleclass");

var index = require('./admin/index');

var session = require("express-session");

var api=require('./api');

var order=require('./admin/order');

var Host = '';

router.use(function (req, res, next) {
    Host = 'http://' + req.headers.host;
    next();
});

//设置session中间件
router.use(session({
    secret: 'keyboard cat',  /*加密方式*/
    resave: false,
    saveUninitialized: true
}));

// router.use(function(req,res,next){

//    /*判断有没有登录*/
//    if(req.url!='/login' && req.url!='/login/doLogin'){   /*其他页面  判断有没有登录*/
//        if(session.userInfo){  /*已经登录可以继续访问admin里面的其他页面*/
//            next();   /*可以访问*/
//        }else{    /*没有登录  跳转到登录页面*/
//            res.redirect('/admin/login');
//        }
//    }else{  /*登录*/
//        next();
//    }
// });

/* GET users listing. */
router.use('/',index);
router.use('/index',index);
router.use("/user",user);
router.use("/login",login);
router.use("/article",article);
router.use("/products",products);
router.use("/articleclass",articleclass);
router.use("/api",api);
router.use('/order',order);

module.exports = router;