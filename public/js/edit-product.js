// getList();
// function getList() {
//     const api = "http://localhost:3000/api/readProduct";
//     $.get(api, function (data, status) {
//         for (var i = 0; i < data.length; i++) {
//             chooseProduct(data[i]);
//         }
//     })
// }

function editProduct(data) {
    var _productName = $('#productName').val(),
    var _Img_url = $('#productLink').val(),
    var _productPrice = $('#productPrice').val(),
    var _productDetail = $('#productDetail').val(),
    var _tags = $('#productTag').val(),
    var _isDeleted = $('#productAvailable').val();
    if (!_productName || !_Img_url || !_productPrice || !_productDetail || !_tags || !_isDeleted) {
        $('#errmsg').text("商品資訊不能留空，請填寫完畢!");
    } else {
        $.post("/productApi/updateProduct",
            {
                'productName': _productName,
                'Img_url': _Img_url,
                'productPrice': _productPrice,
                'productDetail': _productDetail,
                'tags': _tags,
                'isDeleted': _isDeleted
            }, function (res) {
                if (res.status == 1) {
                    $('errmsg').text(res.msg);
                } else {
                    alert("修改成功");
                    location.href = '/public/product-list.html';
                }
            });
    }
}