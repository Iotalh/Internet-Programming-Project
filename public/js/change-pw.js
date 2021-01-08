function changePW() {
    var _oldPW = $('#oldPW').val();
    var _newPW = $('#newPW').val();
    if (!_oldPW || !_newPW) {
        $('#errmsg').text("請輸入密碼");
    } else {
        $.post("/member/changePW", {
            'account': $.cookie('userID'), 'oldpassword': _oldPW, 'newpassword':_newPW},
    function (res) {
                    if (res.status == 1) {
                        $('#errmsg').text(res.msg);
                    } else {
                        alert("修改成功");
                        location.href = '/public/index.html';
                    }
                });
    }
};