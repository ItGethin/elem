/**
 * Created by Administrator on 2017/5/26 0026.
 */
var express = require('express');
var router = express.Router();

var bodyParser = require('body-parser');


var url = require("url");


var DB=require('../../model/db');
/* GET home page. */

var Host = '';

router.use(function (req, res, next) {
    Host = 'http://' + req.headers.host;
    next();
});
router.get('/', function(req, res) {

    DB.find('cate',{},function(err,data){
           if(err){
               console.log(error);
               return;
           }
           res.render("admin/articleclass/articleclass",{
               "host":Host,
               "list":data
           })
    })

});

router.get("/edit/:aid", function(req, res){

    var id=req.params.aid*1;

    DB.find('cate',{"id":id},function(err,data){
        if(err){
            console.log(error);
            return;
        }

        res.render("admin/articleclass/edit",{
            "host":Host,
            "list":data
        })

    })

})


router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));
//增加

router.get("/add",function(req,res){

     res.render("admin/articleclass/add",{
         "host":Host
     })
})
var count = 0;
router.post("/adddata",function(req,res){

    count++;
    var title = req.body.title;
    var description = req.body.description;
    var status = req.body.status;
    var author = req.body.author;
    var addtime = req.body.addtime;
    var id = count;
    DB.insertOne("cate",{
        "title":title,
        "description":description,
        "status":status,
        "author":author,
        "addtime":addtime,
        "id":id,
    },function(err,result){
        if(err){
            console.log(err);
            return;
        }
        res.redirect("/admin/articleclass");
    })

})




router.post("/addedit",function(req,res){

    var title = req.body.title;
    var description = req.body.description;
    var status = req.body.status;
    var author = req.body.author;
    var addtime = req.body.addtime;
    var id = req.body.id*1;

    //修改数据库的数据

    DB.updateOne("cate",{"id":id},{
        "id":id,
         "title":title,
        "description":description,
        "status":status,
        " author": author,
        "addtime":addtime
    },function(err,data){
         if(err){
             console.log(err);
             return;
         }
        res.redirect("/admin/articleclass");
    })
})

module.exports = router;