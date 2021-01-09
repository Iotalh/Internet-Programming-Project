const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/Project_Perfume';
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("連線成功");
});
const productsSchema = new mongoose.Schema({
    productName: String,
    Img_url: String,
    productPrice: Number,
    productDetail: String,
    tags:String,
    isDeleted:Boolean
});
productsSchema.set('collection', 'Products');
const model = mongoose.model('Products', productsSchema);
module.exports = model;