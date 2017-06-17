var express = require('express');
var router = express.Router();
var DB =require('../../model/db');

var bodyParser = require('body-parser');

var async = require('async');
//post数据
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));
/* GET home page. */
var Host=''

router.use(function(req, res,next){
    Host="http://"+req.headers.host;
    next();
})


router.get('/', function(req, res, next){
   DB.find('order',{},function(err,data){
        res.render('admin/order/index',{
            host:Host,
            arr:data
        });

    })
})

router.get('/index', function(req, res, next) {

    DB.find('order',{},function(err,data){
        res.render('admin/order/order',{
            host:Host,
            arr:data
        });

    })
});


router.post('/remove', function(err, data) {

	var id = res.body.id;

	DB.deleteMany('order', {'_id':new DB.ObjectID(id)}, function(err){
        if(err){
            console.log(err);
            return;
        }

        res.redirect('/admin/order/index');
    })
})


module.exports = router;