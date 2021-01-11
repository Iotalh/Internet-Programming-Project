const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/Project_Perfume';
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("連線成功");
});
const memberSchema = new mongoose.Schema({
    userRole: String,
    userName: String,
    account: String,
    password: String,
    favItem : Array
});
memberSchema.set('collection', 'Accounts');
const model = mongoose.model('Accounts', memberSchema);
module.exports = model;