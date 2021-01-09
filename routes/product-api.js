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
router.get('/updateProduct', function (req, res) {

});
// 刪除商品
router.post('/removeProduct', function (req, res) {

});
