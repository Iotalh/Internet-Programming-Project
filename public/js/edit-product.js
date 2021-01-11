let url = new URL(window.location.href);
let parmas = url.searchParams;
const _id = parmas.get('id');
console.log("id: " + _id);

getProduct();
function getProduct() {
    const choose = "/productApi/chooseProduct";
    const pickId = { '_id': _id };
    $.get(choose, function (pickId, status) {
        editProduct(pickId);
    });
    $('#productName').val(pickId.productName);
    $('#productLink').val(pickId.Img_url);
    $('#productPrice').val(pickId.productPrice);
    $('#productDetail').val(pickId.productDetail);
    $('#productTag').val(pickId.tags);
    $('#productAvailable').val(pickId.isDeleted);
}

function editProduct() {
    const _productName = $('#productName').val();
    const _Img_url = $('#productLink').val();
    const _productPrice = $('#productPrice').val();
    const _productDetail = $('#productDetail').val();
    const _tags = $('#productTag').val();
    const _isDeleted = ($('#productAvailable').val() == "true");

    if (!_productName || !_Img_url || !_productPrice || !_productDetail) {
        $('#errmsg').text("商品資訊不能留空，請填寫完畢!");
    } else {
        const update = {
            '_id': _id,
            'productName': _name,
            'Img_url': _link,
            'productPrice': _price,
            'productDetail': _detail,
            'tags': _tag,
            'isDeleted': _available
        };
        $.post("/productApi/updateProduct", update, function (res) {
            if (res.status == 1) {
                $('errmsg').text(res.msg);
            } else {
                alert("修改成功");
                location.href = '/public/product-list.html';
            }
        });

    }
}