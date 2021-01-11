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
        const show_content =
        `<div class="modal fade show pr-4 d-block" id="show" tabindex="-1" aria-labelledby="addFav" aria-modal="true" role="dialog">
           <div class="modal-dialog modal-dialog-centered">
               <div class="modal-content">
                   <div class="modal-body text-center text-primary">請輸入未填欄位！</div>
               </div>
           </div>
       </div>`; 
        $('body').append(show_content);
        setTimeout("location.href = 'add-product.html'", 800);
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
            const show_content =
                `<div class="modal fade show pr-4 d-block" id="show" tabindex="-1" aria-labelledby="addFav" aria-modal="true" role="dialog">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-body text-center text-primary">${res.msg}</div>
                    </div>
                </div>
            </div>`; 
             $('body').append(show_content);
            if (res.status == 0) {
                setTimeout("location.href = 'add-product.html'", 800);
            }else{
                setTimeout("location.href = 'add-product.html'", 800);
            }
        });
    }
}
