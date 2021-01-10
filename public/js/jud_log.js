//判斷是否登入，每個html皆需引入

// document.write('<script src=" https://code.jquery.com/jquery-3.5.1.min.js"></script>');
// document.write('<script src="https://cdn.jsdelivr.net/npm/js-cookie@2/src/js.cookie.min.js"></script>');
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

function addFav() {
    if (checkLoginAndAlert()) {
        const addFav_content =
            `<div class="modal fade show pr-4 d-block" id="addFav" tabindex="-1" aria-labelledby="addFav" aria-modal="true" role="dialog">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-body text-center text-primary">已加入我的收藏</div>
                    </div>
                </div>
	        </div>`;
        $('body').append(addFav_content);
        $('#addFav').click(function () {
            $("#addFav").remove();
        })
    }
}


$(document).ready(function () {
    if ($.cookie('userName') == null) {
        //尚未登入
        document.getElementById("login_text").innerHTML = '<i class="fas fa-user-alt"></i> ' + ' ' + 'log in';
        $('#login_text').attr('href', 'login.html');
    }
    else {
        //已登入
        document.getElementById("login_text").innerHTML = '<i class="fas fa-user-alt"></i> ' + ' ' + $.cookie('userName');
        $('#login,#menu').mouseover(function () {
            $('#menu').show();
        });
        $('#login,#menu').mouseout(function () {
            $('#menu').hide();
        });
    }
    $('#logout').click(function () {
        $.removeCookie("userName");
        location.href = "../index.html";
    });
});
