





$(document).ready(function () {
    if ($.cookie('userName') == null || !($.cookie('userName'))) {
        //尚未登入
        document.getElementById("loginText").innerHTML = '<i class="fas fa-user-alt"></i> Log in';

       // $('#loginText').attr('href', '../login.html');
       $('#loginText').click(function(){
            location.href = "../login.html";
       });

        $('#loginText').attr('href', 'login.html');

    }
    else {
        //已登入
        document.getElementById("loginText").innerHTML = '<i class="fas fa-user-alt"></i> ' + $.cookie('userName');
        const dropdown = 
        `<div class="dropdown-menu position-absolute" aria-labelledby="dropdownMenuButton">
        <a class="dropdown-item h5 font-weight-normal text-secondary-dark"
            href="mypage.html">會員中心</a>
        <a class="dropdown-item h5 font-weight-normal text-secondary-dark" href="#"
            id="logout">登出</a>
    </div>`;
        $("#login").addClass("dropdown");
        $("#login").append(dropdown);
    }
    $('#logout').click(function () {
        $.removeCookie("userName");
        $.removeCookie("userAccount");
        $.removeCookie("userRole");
        location.href = "../index.html";
    });
});
