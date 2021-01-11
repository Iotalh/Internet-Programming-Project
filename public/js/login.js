
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
            if (res.status == 0) {
                sessionStorage.setItem('userName', res.data.userName);
                sessionStorage.setItem('userRole', res.data.userRole);
                sessionStorage.setItem('userAccount', res.data.account);

                location.href = '/public/product-list.html';
                alert("登入成功!");
            } else {
                alert(res.msg);
            }
        });
    }
}
