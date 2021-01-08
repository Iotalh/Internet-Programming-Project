document.write('<script src=" https://code.jquery.com/jquery-3.5.1.min.js"></script>');
function login() {
    var _account = $('#email').val();
    var _password = $('#password').val();
    console.log("login");
    if (!_account || !_password) {
        $("#errmsg").removeClass("invisible");
    }
    else {
        $.post("/memberApi/login", { 'account': _account, 'password': _password },
            function (res) {
                if (res.status == 1) {
                    $("#errmsg").removeClass("invisible");
                    $('#errmsg').text(res.msg);
                } else {
                    $.cookie('userName', res.data.name);
                    $.cookie('userID', res.data.account);
                    alert('登入成功');
                    location.href = '/public/index.html';
                }
            });
    }
}
