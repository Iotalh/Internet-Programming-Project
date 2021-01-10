function checkLoginAndAlert() {
    if ($.cookie('userName') == null) {
        const login_content =
            `<div class="modal fade show pr-4 d-block" id="addFav" tabindex="-1" aria-labelledby="addFav" aria-modal="true" role="dialog">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-body text-center text-primary">請先登入</div>
                    </div>
                </div>
            </div>`;
        $('body').append(login_content);
        setTimeout(" location.href = '/public/login.html'", 500);
        return false;
    }
    else {
        return true;
    }
}

function goToFavList() {
    if (checkLoginAndAlert()) {
        location.href = '/public/fav-list.html';
    }
}
//var product_id;
function addFav(product_id) {
    console.log(product_id);
    if (checkLoginAndAlert()) {
        const addFav_content =
            `<div class="modal fade show pr-4 d-block" id="addFav" tabindex="-1" aria-labelledby="addFav" aria-modal="true" role="dialog">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-body text-center text-primary">已加入我的收藏</div>
                    </div>
                </div>
            </div>`;
        
        const api="/memberApi/addFav";

        $('body').append(addFav_content);
        $('#addFav').click(function () {
            $("#addFav").remove();
        })
    }
}