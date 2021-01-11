document.write('<script src=" https://code.jquery.com/jquery-3.5.1.min.js"></script>');

function register() {
    console.log("register");
    var _role = $('#userRole').val();
    var _name = $('#userName').val();
    var _email = $('#email').val();
    var _pw = $('#password').val();
    var _cfmpw = $('#cfmpw').val();
    if (!_name || !_email || !_pw || !_cfmpw) {
        $('#errmsg').text('請輸入未填欄位!');
    } else if (_pw != _cfmpw) {
        $('#errmsg').text('兩次輸入密碼不相同!');
    } else {
        var api = "/memberApi/register";
        var data = { 'userRole': _role, 'userName': _name, 'account': _email, 'password': _pw };
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
               setTimeout("location.href = '/public/login.html'", 800);
            } else {
                setTimeout("location.href = 'signup.html'", 800);
            }
        });
    }
}