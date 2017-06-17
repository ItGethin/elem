var express = require('express');
var router = express.Router();

var bodyParser = require('body-parser');
var multiparty = require('multiparty');

var async = require('async');
//post数据
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));


//引入Db

var DB=require('../../model/db');

var Host='';

router.use(function(req, res,next){
  Host="http://"+req.headers.host;
  next();
})

router.get('/', function(req, res){
    DB.find('products',{}, function (err, data) {
        if(err){
            console.log(err);
        }

        res.render('admin/products/index',{
            host:Host,
            list:data
        })
    })
});


router.get('/add', function (req, res) {
    res.render('admin/products/add',{
        host:Host
    })
});

router.post('/doAdd', function(req, res) {

  DB.insertOne('products',req.body, function (err) {
      if(err){
          console.log(err);
          return;
      }
      res.redirect(Host+'/admin/products');
  })
});

//编辑页面
router.get('/edit', function(req, res) {
    var id=req.query.id;
    DB.find('products',{'_id':new DB.ObjectID(id)},function(err,data){
        if(err){
            console.log(err);
            return;
        }

        res.render('admin/products/edit',{
            host:Host,
            list:data[0]
        })
    });
});


//执行修改操作
router.post('/doEdit',function(req, res) {
    var form = new multiparty.Form();
    form.uploadDir = './public/images';
    var ppp=req.body.img;
    form.parse(req, function (err, fields, files) {
        // console.log(files);
        var id=fields.id[0];
        var title=fields.title[0];
        var description=fields.description[0];
        // console.log(files);
        var img=files.img[0].originalFilename?"images/"+files.img[0].path.split("\\")[2]:"images/"+ppp;
        var old_price=fields.old_price[0];
        var price=fields.price[0];
        var product_content=fields.product_content[0];
        var data = {
            'title':title,
            'product_content':product_content,
            'description':description,
            'old_price':old_price,
            'img':img,
            "price":price
          }

        DB.updateOne('products',{'_id':new DB.ObjectID(id)},{$set:data},function(err){
                    if(err){
                        console.log('修改商品失败');
                        return;
                    }
                    res.redirect(Host+'/admin/products');
            })
    });
    
});


router.get('/delete', function(req, res) {
    var id = req.query.id;

    DB.deleteMany('products', {'_id':new DB.ObjectID(id)}, function(err){
        if(err){
            console.log(err);
            return;
        }
        res.redirect('/admin/products');
    })
});

module.exports = router;
