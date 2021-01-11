
$(document).ready(function(){
    readProductInfo();
    function readProductInfo(){
        const Url = location.href.split('?');
        const _id = Url[1].split('=');
        console.log(_id[1]);
        addFav(_id[1]);
        const api = '/productApi/findByID';
        var data={'id':_id[1]}
        $.post(api , data, function (res) {
            console.log(res.data.productName);
            $("#productName").text(res.data.productName);
        });
    }
})