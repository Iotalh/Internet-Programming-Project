function register() {
    console.log("register");
    var _name = $('#name').val();
    var _email = $('#email').val();
    var _ac = $('#ac').val();
    var _pw = $('#pw').val();
    var _cfmpw = $('#cfmpw').val();
    if (!_name || !_email || !_ac || !_pw || !_cfmpw) {
        $('#errmsg').text('請輸入未填欄位!');
    } else if (_pw != _cfmpw) {
        $('#errmsg').text('兩次輸入密碼不相同!');
    } else {
        var api = "/member/register";
        var data = { 'name': _name, 'account': _ac, 'email': _email, 'password': _pw };
        $.post(api, data, function (res) {
            if (res.status == 0) {
                location.href = '/public/login.html';
                alert('註冊成功!');
            }
        });
    }
}