


$(document).ready(function () {
    if ($.cookie('userName') == null || !($.cookie('userName'))) {
        //尚未登入
        document.getElementById("loginText").innerHTML = '<i class="fas fa-user-alt"></i> Log in';
       // $('#loginText').attr('href', '../login.html');
       $('#loginText').click(function(){
            location.href = "../login.html";
       });
    }
    else {
        //已登入
        document.getElementById("login_text").innerHTML = '<i class="fas fa-user-alt"></i> ' + ' ' + $.cookie('userName');
        $('#login,#menu').mouseover(function () {
            $('#menu').show();
        });
        $('#login,#menu').mouseout(function () {
            $('#menu').hide();
        });
    }
    $('#logout').click(function () {
        $.removeCookie("userName");
        $.removeCookie("userAccount");
        $.removeCookie("userRole");
        location.href = "../index.html";
    });
});
