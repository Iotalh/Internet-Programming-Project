const express = require('express');
const router = express.Router();
//這裡放置與會員相關的API程式碼
module.exports = router;

const memberModel = require('../models/memberModels');
//註冊功能路由
router.post('/register', function(req, res){
const newMember = new memberModel({
userRole:"member",
userName: req.body.name,
account: req.body.account,
password: req.body.password
});
memberModel.countDocuments({account: req.body.account}, function(err, data){
if(data>0){
res.json({"status":1, "msg":"此帳號已被註冊!"});
} else {
newMember.save(function(err, data){
if(err){
res.json({"status":1, "msg":"error"});
} else {
res.json({"status":0, "msg":"success", "data":data});
}
});
}
});
});