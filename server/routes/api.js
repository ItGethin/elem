var express = require('express');
var router = express.Router();
var DB=require('../model/db');
var async = require('async');

/* GET users listing. */
router.get('/products', function(req, res, next) {
  DB.find('products',{}, function (err,data) {
    if(err){
      console.log(err);
      return;
    }
    res.json({"result":data});
  })
});

router.get("/article",function(req,res,next){
  DB.find("article",{},function(err,data){
    if(err){
      console.log(err);
      return;
    }
    res.json({"result":data});
  })
})

router.get('/get', function(req, res, next) {
  var page=req.query.page;
  DB.find('user',{},{pageSize:1,page:page},function(err,data){
    if(err){
      console.log(err);
      return;
    }
    res.json({result:data,success:1});
  })
})

router.get("/class",function(req,res,next){
  DB.find("cate",{},function(err,data){
    if(err){
      console.log(err);
      return;
    }
    res.json({"result":data});
  })

})


router.get('/order', function(req, res) {

  var username = req.query.username;
  // console.log(username);
  DB.find('order', {'username': username}, function(err, data) {
    if(err) {
      console.log(err);
      return;
    }
    res.json({'result':data})
  })
})


// 订单保存
router.post('/saveorder', function(req, res) {
  // var data = req.body.order;
  DB.insertOne('order', req.body, function(err, data) {
    if(err) {
      console.log(err);
      return;
    }
    res.json({'result':'订单保存成功'});
  })
})


// 新闻的获取
router.get('/news', function(req, res) {
  DB.find('article', {}, function(err, data) {
    if(err) {
      console.log(err);
      return;
    } 
    res.json({'result': data});
  })
})

// 登录验证
router.post('/login', function(req, res) {

  var name = req.body.username;
  var pwd = req.body.password;
  var data = {
    username:name,
    password:pwd
  };

  var data1 = {
    code:1,
    msg:'登录成功！！'
  }

  DB.find('user', data, function(err, bb) {
    
    // console.log(bb);
    if(bb.length!=0) {
      data1.xinxi = bb;
      res.jsonp({'result':data1});
    } else {
      data1.code = 0;
      data1.msg = '登陆失败!!!';
      res.jsonp({'result':data1});
    }
    
  })
})



// 注册验证
router.post('/register', function(req, res) {

  // 获取用户的字段
  var username = req.body.username;
  var pwd = req.body.password;
  var tel = req.body.tel;
  var address = req.body.address;
  var email = req.body.email;
  var status = req.body.status;
  var add_time = req.body.add_time;

  var result1 = {
    code:1,
    msg:'注册成功'
  }

  async.waterfall([
      function(cb) {
        DB.count('user',{"username":username}, function(err, num) {
          if(num == 0) {
            cb(null,num);
          } else {
            cb(num,'用户已存在!!!!');
          }
        })

      },
      function(num,cb) {
          DB.insertOne('user',req.body,function(err,data) {
            // console.log(req.body);
            if(err) {
              cb(data,'注册失败!!!!');
            } else {
              cb(null,data);
            }
          })
        
      }
    ],function(err, result) {
        if(err) {
          result1.code = 0;
          result1.msg = result;
          res.jsonp({'result':result1});
        } else {
          res.jsonp({'result':result1});
        }
    }
  )
})



// 验证手机号码
router.post('/regphone', function(req, res) {
  var phone = req.body.tel;
  var data = {
    code:1,
    msg:'可以注册'
  }
  DB.count('user',{'tel':phone}, function(err,num) {
    if(num==0) {
      res.jsonp({'result':data});
    } else {
      data.code = 0;
      data.msg = '用户已存在';
      res.jsonp({'result':data});
    }
  })
})





module.exports = router;
