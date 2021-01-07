const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

//這裡放置與會員相關的API程式碼
module.exports = router;

const memberModel = require('../models/memberModels');
//註冊功能路由
router.post('/register', function (req, res) {
    // 密碼加密
    const saltRounds = 10;
    const hash = bcrypt.hashSync(req.body.password, saltRounds);
    console.log(hash);
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

//修改密碼路由
router.post('/changePW', function (req, res) {
    memberModel.findOne({ account: req.body.account, password: req.body.oldpassword }, 
        function(err, data){
        if(data== null){
        res.json({ "status": 1, "msg": "舊密碼輸入錯誤!" });
    } else {
        data.password = req.body.newpassword;
        data.save(function (err) {
            if (err) {
                res.json({ "status": 1, "msg": "error" });
            } else {
                res.json({ "status": 0, "msg": "success!" });
            }
        });
    }
});
    });