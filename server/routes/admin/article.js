/**
 * Created by Administrator on 2017/5/26 0026.
 */
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var multiparty = require('multiparty');

var ObjectId = require('mongodb').ObjectID;

var DB = require("../../model/db");

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());


var Host='';

router.use(function(req, res,next){
    Host="http://"+req.headers.host;
    next();
})



router.get('/', function(req, res, next) {

   DB.find("article",{},function(err,data){
       if(err){
           console.log(err);
           return;
       }

       res.render("admin/article/index",{
           host:Host,

           list:data

       });
   });

});


router.get("/add",function(req,res,next){
        res.render("admin/article/add",{
            host:Host,
        });
})



router.post("/addPost",function(req,res) {
    var form = new multiparty.Form();
    form.uploadDir = './static/upload';
    form.parse(req, function (err, fields, files) {
        // console.log(fields);
        var obj ={
            title : fields.title[0],
            author : fields.author[0],
            description : fields.description[0],
            content : fields.content[0],
            addtime: new Date(),
            img:Host+"/"+ files.img[0].path
        }
        DB.insertOne("article",obj,function(err){
            if(err){
                console.log(err);
            }
            res.redirect("/admin/article");


        })

    })

})



router.get('/delete', function(req, res) {
    var id = req.query.id;

    DB.deleteMany('article', {'_id':new DB.ObjectID(id)}, function(err){
        if(err){
            console.log(err);
            return;
        }
        res.redirect('/admin/article');
    })
})




//编辑页面
router.get('/edit', function(req, res) {
    var id=req.query.id;
    DB.find('article',{'_id':new DB.ObjectID(id)},function(err,data){
        if(err){
            console.log(err);
            return;
        }
        // console.log(data);
        res.render('admin/article/edit',{
            host:Host,
            list:data[0]
        })
    });
});


//执行修改操作
router.post('/doEdit',function(req, res) {

    var form = new multiparty.Form();
    form.uploadDir = './static/upload';
    form.parse(req, function (err, fields, files) {
        // console.log(fields);
        // console.log(files);
        
        var id = fields._id[0];
        var title = fields.title[0];
        var author = fields.author[0];
        var description = fields.description[0];
        var content = fields.content[0];
        var addtime = new Date();
        if(files.img[0].originalFilename) {

          var img = Host+"/"+ files.img[0].path;
          var data = {
            'title':title,
            'author':author,
            'description':description,
            'content':content,
            'img':img
          }
            DB.updateOne('article',{'_id':new DB.ObjectID(id)},{$set:data},function(err){
                    if(err){
                        console.log('修改新闻失败');
                        return;
                    }
                    res.redirect(Host+'/admin/article');
            })
        } else {
          var data = {
            'title':title,
            'author':author,
            'description':description,
            'content':content
          };


          DB.updateOne('article',{'_id':new DB.ObjectID(id)},{$set:data},function(err){
                    if(err){
                        console.log('修改新闻失败');
                        return;
                    }
                    res.redirect(Host+'/admin/article');
            })

        }
    })
    /*DB.updateOne('article',{'_id':new DB.ObjectID(id)},{
        title: title,
        description:description,
        img:img,
        old_price:old_price,
        price:price,
        product_content:product_content
    },function(err){
            if(err){
                console.log('修改商家失败');
                return;
            }
            res.redirect(Host+'/admin/article');
    })*/
});


 module.exports = router;
