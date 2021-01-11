function changePW() {
    var _oldPW = $('#oldpw').val();
    var _newPW = $('#newpw').val();
    var _newPW_check = $('#newpw-check').val();
   
    if (!_oldPW || !_newPW || !_newPW_check) {
        const login_content =
        `<div class="modal fade show pr-4 d-block" id="addFav" tabindex="-1" aria-labelledby="addFav" aria-modal="true" role="dialog">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-body text-center text-primary">請輸入密碼</div>
                </div>
            </div>
        </div>`;
        
        $('body').append(login_content);
        setTimeout(" location.href = '../mypage.html'", 800);
       
    } 
    else if(_newPW != _newPW_check){
        const login_content =
        `<div class="modal fade show pr-4 d-block" id="addFav" tabindex="-1" aria-labelledby="addFav" aria-modal="true" role="dialog">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-body text-center text-primary">新密碼與確認密碼不相同</div>
                </div>
            </div>
        </div>`;
        
        $('body').append(login_content);
        setTimeout(" location.href = '../mypage.html'", 800);
    }
    else {
        const api = "/memberApi/changePW";
        var data = {'account': $.cookie('userAccount'), 'oldpassword': _oldPW, 'newpassword':_newPW};
        $.post(api, data, function (res) {
            const login_content =
            `<div class="modal fade show pr-4 d-block" id="addFav" tabindex="-1" aria-labelledby="addFav" aria-modal="true" role="dialog">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-body text-center text-primary">${res.msg}</div>
                    </div>
                </div>
            </div>`;
            if (res.status == 1) {
                //失敗
                $('body').append(login_content);
                setTimeout(" location.href = '../mypage.html'", 800);
            } else {
                
                $('body').append(login_content);
                $.removeCookie("userName");
                $.removeCookie("userAccount");
                $.removeCookie("userRole");
                setTimeout(" location.href = '../login.html'", 800);
            }
         });
    }
};