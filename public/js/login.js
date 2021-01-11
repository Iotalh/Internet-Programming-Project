
function login() {
    var _account = $('#email').val();
    var _password = $('#password').val();
    console.log("onclick");
    if (!_account || !_password) {
        $("#errmsg").removeClass("invisible");
    }
    else {
        console.log("開始驗證");
        const api = "/memberApi/login";
        var data = { 'account': _account, 'password': _password };
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
                sessionStorage.setItem('userName', res.data.userName);
                sessionStorage.setItem('userRole', res.data.userRole);
                sessionStorage.setItem('userAccount', res.data.account);
                
                setTimeout("location.href = '/public/product-list.html'", 800);
            } else {
                setTimeout("location.href = 'login.html'", 800);
            }
        });
    }
}
