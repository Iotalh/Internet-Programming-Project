//判斷是否登入，每個html皆需引入

// document.write('<script src=" https://code.jquery.com/jquery-3.5.1.min.js"></script>');
// document.write('<script src="https://cdn.jsdelivr.net/npm/js-cookie@2/src/js.cookie.min.js"></script>');
function jude_login(){
    if($.cookie('userName') == null){
        alert("尚未登入，請先登入");
        location.href = '/public/login.html';
    }
}


$(document).ready(function(){
    if($.cookie('userName')  == null){
        //尚未登入
        document.getElementById("login_text").innerHTML = '<i class="fas fa-user-alt"></i> '+' '+'log in';
        $('#login_text').attr('href','login.html');
    }
    else{
        //已登入
         document.getElementById("login_text").innerHTML = '<i class="fas fa-user-alt"></i> '+' '+$.cookie('userName');
         $('#login,#menu').mouseover(function(){
            $('#menu').show();
        });
        $('#login,#menu').mouseout(function(){
            $('#menu').hide();
        });
    }
   $('#logout').click(function(){
        $.removeCookie("userName");
        location.href = "../index.html";
   })
});
