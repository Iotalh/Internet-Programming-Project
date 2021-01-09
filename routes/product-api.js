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

});
// 更新商品
router.post('/updateProduct', function (req, res) {
    var id = req.body.id;
    listModel.findById(id, function (err, data) {
        if (err) {
            console.log(err);
            res.json({ "status": 1, "msg": "error" });
        } else {
            data.productName = req.body.productName,
            data.Img_url= req.body.Img_url,
            data.productPrice= req.body.productPrice,
            data.productDetail= req.body.productDetail,
            data.tags= req.body.tags,
            data.isDeleted= req.body.isDeleted
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

// 刪除商品
router.post('/removeProduct', function (req, res) {

});
