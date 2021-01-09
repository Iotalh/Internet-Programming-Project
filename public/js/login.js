
//document.write('<script src=" https://code.jquery.com/jquery-3.5.1.min.js"></script>');
//document.write('<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-cookie/1.4.1/jquery.cookie.min.js"></script>');
function login() {
    var _account = $('#email').val();
    var _password = $('#password').val();
    console.log("123");
    if (!_account || !_password) {
        $("#errmsg").removeClass("invisible");
    }
    else {
        console.log("555");
        const api = "/memberApi/login";
        var data = { 'account': _account, 'password': _password };
        $.post(api, data, function (res) {
            if (res.status == 0) {
                //console.log(data.userName);
                $.cookie('userName',res.data.userName);
                location.href = '/public/product-list.html';
                alert('登入成功!');
            }else{
                alert(res.msg);
            }
        });
    }   
}
