
$(document).ready(function(){
    readProductInfo();
    function readProductInfo(){
        const Url = location.href.split('?');
        const _id = Url[1].split('=');
        console.log(_id[1]);
        const api = '/productApi/findByID';
        var data={'id':_id[1]}
        $.post(api , data, function (res) {
            console.log(res.data.productName);
            $("#productName").text(res.data.productName);
            $('#productDetail').text(res.data.productDetail);
            $('#productPrice').text('NT$' + res.data.productPrice);
            if($.cookie('userRole') == "admin"){
                let edit=
                `<a href="../edit-product.html?${_id}"><i class="fas fa-pen text-primary"></i></a>`;
                $('#FavAndEdit').append(edit);
            }
        });
    }
})