function addProduct() {
    console.log("addProduct");
    var _name = $('#productName').val();
    var _link = $('#productLink').val();
    var _price = $('#productPrice').val();
    var _tag = $('#productTag').val();
    var _detail = $('#productDetail').val();
    var _available = ($('#productAvailable').val() == "true");
    if($('#productAvailable').val()=="上架中"){_available=true;}
    else{_available=false;}
    
    if (!_name || !_link || !_price || !_tag || !_detail) {
        alert("請輸入未填欄位！");
    } else {
        var api = "/productApi/createProduct";
        var data = {
            'productName': _name,
            'Img_url': _link,
            'productPrice': _price,
            'productDetail': _detail,
            'tags': _tag,
            'isDeleted': _available
        };
        $.post(api, data, function (res) {
            if (res.status == 0) {
                alert("新增成功");
            }else{
                alert("失敗");
            }
        });
    }
}
