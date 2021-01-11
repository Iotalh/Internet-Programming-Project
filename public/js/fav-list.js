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
        setTimeout(" location.href = '/public/login.html'", 800);
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

function addFav(_id) {
    if (checkLoginAndAlert()) {
        const api="/memberApi/addFav";
        var data = { 'id': _id, 'account': $.cookie('userAccount')};
        $.post(api, data, function (res) {
            const addFav_content =
             `<div class="modal fade show pr-4 d-block" id="addFav" tabindex="-1" aria-labelledby="addFav" aria-modal="true" role="dialog">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-body text-center text-primary">${res.msg}</div>
                    </div>
                </div>
            </div>`;
            
            $('body').append(addFav_content);
            setTimeout("$('#addFav').remove()", 800);
        });
    }
    else{
        const addFav_content =
             `<div class="modal fade show pr-4 d-block" id="addFav" tabindex="-1" aria-labelledby="addFav" aria-modal="true" role="dialog">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-body text-center text-primary">請先登入</div>
                    </div>
                </div>
            </div>`;
            
         $('body').append(addFav_content);
         setTimeout("$('#addFav').remove()", 800);
    }
}