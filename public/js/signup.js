document.write('<script src=" https://code.jquery.com/jquery-3.5.1.min.js"></script>');

function register() {
    console.log("register");
    var _role="member";
    var _name = $('#userName').val();
    var _email = $('#email').val();
    var _pw = $('#password').val();
    var _cfmpw = $('#cfmpw').val();
    if (!_name || !_email  || !_pw || !_cfmpw) {
        $('#errmsg').text('請輸入未填欄位!');
    } else if (_pw != _cfmpw) {
        $('#errmsg').text('兩次輸入密碼不相同!');
    } else {
        var api = "/memberApi/register";
        var data = { 'userRole': _role,'userName': _name,  'account': _email, 'password': _pw };
        $.post(api, data, function (res) {
            if (res.status == 0) {
                location.href = '/public/login.html';
                alert('註冊成功!');
            }else{
                alert('此帳號已被註冊!');
            }
        });
    }
}