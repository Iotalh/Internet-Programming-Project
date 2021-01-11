const express = require('express');
const router = express.Router();

module.exports = router;

const productModel = require('../models/product-models');

// 新增商品
router.post('/createProduct', function (req, res) {
    const newProduct = new productModel({
        productName: req.body.productName,
        Img_url: req.body.Img_url,
        productPrice: req.body.productPrice,
        productDetail: req.body.productDetail,
        tags: req.body.tags,
        isDeleted: req.body.isDeleted
    })
    newProduct.save(function (err, data) {
        if (err) {
            res.json({ "status": 1, "msg": "error" });
        } else {
            res.json({ "status": 0, "msg": "success", "data": data });
        }
    });
});

// 存取所有商品
router.get('/readProducts', function (req, res) {
    productModel.find(function (err, data) {
        if (err) console.log(err);
        // console.log(data);
        res.send(data);
    });
});
//讀取要更新的商品資料
router.get('/chooseProduct', function (req, res) {
    const id = new productModel.Products.ObjectID(req.query.id);
    console.log("choose id: " + id);
    productModel.find({"_id": id}, function (err, data) {
        if (err) console.log(err);
        console.log(data);
        res.send(data);
    });
});
// 更新商品
router.post('/updateProduct', function (req, res) {
    const id = new productModel.Products.ObjectID(req.query.id);
    console.log("upadte id: " + id);
    productModel.find({"_id": ObjectId(id)}, function (err, data) {
        if (err) {
            console.log(err);
            res.json({ "status": 1, "msg": "error" });
        } else {
            data.productName = req.body.productName,
                data.Img_url = req.body.Img_url,
                data.productPrice = req.body.productPrice,
                data.productDetail = req.body.productDetail,
                data.tags = req.body.tags,
                data.isDeleted = req.body.isDeleted
            data.save(function (err) {
                if (err) {
                    console.log(err);
                    res.json({ "status": 1, "msg": "error" });
                } else {
                    res.json({ "status": 0, "msg": "修改商品成功" });
                }
            });
        }
    });
});

router.post('/showWishlist', function (req, res) {
    productModel.findOne({"_id": req.body.id}, function (err, data) {
        if(data == null){
            res.json({ "status": 1, "msg": "null" });
        }else{
            console.log(data);
            res.json({ "status": 0, "msg": "success","data":data });
        }
    });
});

