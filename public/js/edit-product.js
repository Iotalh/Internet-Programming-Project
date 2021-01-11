let url = new URL(window.location.href);
let parmas = url.searchParams;
const _id = parmas.get('id');
console.log("id: " + _id);
getProduct(_id);
function getProduct(_id) {
    const choose = "/productApi/chooseProduct?id=" + _id;
    $.get(choose, function (data, status) {
        $('#productName').val(data.productName);
        $('#productLink').val(data.Img_url);
        $('#productPrice').val(data.productPrice);
        $('#productDetail').val(data.productDetail);
        $('#productTag').val(data.tags);
        $('#productAvailable').val((data.isDeleted ? "true" : "false"));
    });
    
}
function editProduct() {

    var _productName = $('#productName').val();
    var _Img_url = $('#productLink').val();
    var _productPrice = $('#productPrice').val();
    var _productDetail = $('#productDetail').val();
    var _tags = $('#productTag').val();
    var _isDeleted = ($('#productAvailable').val() == "true");

    if (!_productName || !_Img_url || !_productDetail) {
        console.log("_productName: " + _productName);
        console.log("_Img_url: " + _Img_url);
        console.log("_productDetail: " + _productDetail);
        $('#errmsg').text("商品資訊不能留空，請填寫完畢!");
    } else {
        const payload = {
            '_id': _id,
            'productName': _productName,
            'Img_url': _Img_url,
            'productPrice': _productPrice,
            'productDetail': _productDetail,
            'tags': _tags,
            'isDeleted': _isDeleted
        };
        let requestUrl = "/productApi/updateProduct";
        $.post(requestUrl, payload, function (res) {
            if (res.status == 1) {
                $('errmsg').text(res.msg);
            } else {
                alert("修改成功");
                location.href = '/public/product-list.html';
            }
        });

    }
}
$(document).ready(function () {

    var $inputCheck = $(".form-control");

    $inputCheck.focusout(function () {
        if ($(this).val() != "") {
            $(this).removeClass("is-invalid");
            $(this).addClass("is-valid");
        } else {
            $(this).addClass("is-invalid");
            $(this).removeClass("is-valid");
        }
    });

});
