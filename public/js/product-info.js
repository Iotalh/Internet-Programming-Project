
$(document).ready(function () {
    readProductInfo();
    function readProductInfo() {
        const Url = location.href.split('?');
        const _id = Url[1].split('=');
        const api = '/productApi/findByID';
        var data = { 'id': _id[1] }
        $.post(api, data, function (res) {
            $("#productName").text(res.data.productName);
            $('#productDetail').text(res.data.productDetail);
            $('#productPrice').text('NT$' + res.data.productPrice);
            $('#productImg').attr('src', res.data.Img_url);
            if (sessionStorage.getItem('userRole') == "admin") {
                let edit =
                    `<a href="../edit-product.html?${_id}"><i class="fas fa-pen text-primary"></i></a>`;
                $('#FavAndEdit').append(edit);
            }
            else {
                let addFav =
                    `<i class="fas fa-heart text-primary" onclick="addFav_info()"></i>`;
                $('#FavAndEdit').append(addFav);

            }
        });
    }
})