function changePW() {
    var _oldPW = $('#oldpw').val();
    var _newPW = $('#newpw').val();
    var _newPW_check = $('#newpw-check').val();
    
    if (!_oldPW || !_newPW || !_newPW_check) {
        alert("請輸入密碼");
    } else {
        const api = "/memberApi/changePW";
        var data = {'account': $.cookie('userAccount'), 'oldpassword': _oldPW, 'newpassword':_newPW};
        $.post(api, data, function (res) {
            console.log("ppp");
            if (res.status == 1) {
                alert(res.msg);
            } else {
                $.removeCookie("userName");
                $.removeCookie("userAccount");
                $.removeCookie("userRole");
                location.href = '/public/index.html';
                alert(res.msg);
            }
         });
    }
};