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


router.get('/', function(req, res, next) {

    var page = req.query.page || 1;
    var pageSize = 5;

    // 异步流
    async.parallel([

            function(cb) {
                DB.count('user',{},function(err, num) {
                    
                    cb(null,num); 
                })
            },
            function(cb) {
                
                DB.find('user',{},{"page":page,'pageSize':pageSize}, function(err,data){
                    if(err) {
                        console.log(err);
                    }
                    cb(null,data);  
                }) 
            }
        ],
        function(err,result) {
            // console.log(result[1]);
            
            var totalPage = Math.ceil(result[0]/pageSize);
            
            
            res.render('admin/user/index',{
                host:Host,
                arr:result[1],
                totalPage:totalPage,
                page:page
            });

        }

    )
    
});

//增加人员
router.get('/add', function(req, res, next) {
    res.render('admin/user/add',{
        host:Host
    })

});
router.post('/doAdd', function(req, res, next) {
    DB.insertOne('user',req.body,function(err){
        if(err){
            console.log(err);
            return;
        }
        res.redirect('/admin/user');


    })
});

//删除人员
router.get('/remove', function(req, res, next) {
    var id=req.query.id;
    DB.deleteMany('user', {'_id':new DB.ObjectID(id)}, function(err){
        if(err){
            console.log(err);
            return;
        }

        res.redirect('/admin/user');
    })
});

//修改信息
router.get('/edit', function(req, res, next) {

    DB.find('user',{'username':req.query.username},function(err,data){
        res.render('admin/user/edit',{
            host:Host,
            arr:data
        });

    })
});
router.post('/doEdit', function(req, res, next) {

    DB.updateOne('user', {'_id':new ObjectId(req.query._id)}, req.body, function(err){
        if(err){
            console.log(err);
            return;
        }
        //res.send('修改成功');
        res.redirect('/admin/user');

    })
});


module.exports = router;
