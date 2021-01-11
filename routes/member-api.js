const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

// 這裡放置與會員相關的API程式碼
module.exports = router;

const memberModel = require('../models/member-models');
// 註冊功能路由
router.post('/register', function (req, res, next) {
    // 密碼加密
    const saltRounds = 10;
    const hash = bcrypt.hashSync(req.body.password, saltRounds);
    console.log("hash");
    const newMember = new memberModel({
        userRole: req.body.userRole,
        userName: req.body.userName,
        account: req.body.account,
        password: hash
    });
    memberModel.countDocuments({ account: req.body.account }, function (err, data) {
        if (data > 0) {
            res.json({ "status": 1, "msg": "此帳號已被註冊!" });
        } else {
            newMember.save(function (err, data) {
                if (err) {
                    res.json({ "status": 1, "msg": "error" });
                } else {
                    res.json({ "status": 0, "msg": "success", "data": data });
                }
            });
        }
    });
});

// 登入功能路由
router.post('/login', function (req, res, next) {
    memberModel.findOne({ account: req.body.account },
        function (err, data) {
            if (data == null) {
                res.json({ "status": 1, "msg": "該帳號不存在" });
            } else {
                bcrypt.compare(req.body.password, data.password).then(function (check) {
                    // console.log(check); 
                    if (check == false) {
                        res.json({ "status": 1, "msg": "密碼錯誤" });
                    } else {
                        //console.log(data.userName);
                        res.json({ "status": 0, "msg": "success", "data": data });
                    }
                });
            }
        });
});

// 修改密碼路由
router.post('/changePW', function (req, res, next) {
    memberModel.findOne({ account: req.body.account},
        function (err, data) {
            bcrypt.compare(req.body.oldpassword, data.password).then(function (check) {
                console.log(check);
                if (check == false) {
                    console.log("舊密碼輸入錯誤");
                    res.json({ "status": 1, "msg": "舊密碼輸入錯誤!" });
                } else {
                    const saltRounds = 10;
                    const hash = bcrypt.hashSync(req.body.newpassword, saltRounds);
                    memberModel.updateOne({ account : req.body.account },{$set:{password:hash}},function(err, data){
                        if(err){
                            console.log("更改失敗");
                            res.json({ "status": 1, "msg": "更改失敗" });
                        }else{
                            console.log("更改成功");
                            res.json({ "status": 0, "msg": "更改成功" });
                        }
                    });
                
                }
            });
        });
});
//新增收藏路由
router.post('/addFav', function (req, res, next) {
    memberModel.findOne({account:req.body.account},function(err, data){
        console.log(req.body.id);
        if (data == null) {
            res.json({ "status": 1, "msg": "該帳號不存在" });
        }else{
            memberModel.updateOne({ account : req.body.account },{ $push: { favItem: req.body.id}},function(err, data){
                if(err){
                    res.json({ "status": 1, "msg": "收藏失敗" });
                }else{
                    res.json({ "status": 0, "msg": "收藏成功" });
                }
            });
        }
    });
});