$(document).ready(function () {
    if (sessionStorage.getItem('userName') == null) {
        //尚未登入
    }
    else {
        //已登入
        $("#login-item").removeClass("d-none");
        $("#not-login").addClass("d-none");
        document.getElementById("login-text").innerHTML = '<i class="fas fa-user-alt"></i> ' + sessionStorage.getItem('userName');
        const dropdown = 
        `<div class="dropdown-menu position-absolute" aria-labelledby="dropdownMenuButton">
        <a class="dropdown-item h5 font-weight-normal text-secondary-dark"
            href="mypage.html">會員中心</a>
        <a class="dropdown-item h5 font-weight-normal text-secondary-dark" id="logout">登出</a>
    </div>`;
        $("#login").addClass("dropdown");
        $("#login").append(dropdown);
    }
    $('#logout').click(function () {
        sessionStorage.clear();
        location.href = "../index.html";
    });
});

