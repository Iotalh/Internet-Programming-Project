getfav();
function getfav() {
    const api = "/memberApi/findFav";
    var data = {'account':$.cookie('userAccount')};
    $.post(api , data, function (res) {
        console.log(res.data.length);
        if(res.data.length == 0){
            const noFav_content =
            `<div class="modal-dialog modal-dialog-centered">
                <div>
                    <div class="modal-body text-center text-primary">現在沒有收藏喔!</div>
                </div>
            </div>`;

            $('#wish-list').append(noFav_content);
        } 
        else{
            for(var i = 0;i < res.data.length;i++){
                showWishlist(res.data[i]);
            }
        }
    });
}

function showWishlist(_id){
    const api = "/productApi/findByID";
    var data = {'id':_id};
    $.post(api , data, function (res) {
        if(res.status == 1 ){
            console.log(res.msg);
        }
        else{
            let wish_content=
            `<li class="col-6 col-md-3 mb-8 mb-md-13" data-aos="fade-up">
                <div class="card">
                    <a href="product-info.html?id=${res.data._id}">
                        <picture>
                            <img src="${res.data.Img_url}" class="card-img-top" alt="product img">
                        </picture>
                    </a>
                    <div class="card-body">
                        <h2 class="card-title h4 mb-0 ${res.data._id}" id="${res.data._id}-title">${res.data.productName}</h2>
                        <p class="card-text font-weight-light mb-1">NT$${res.data.productPrice}</p>
                        <div class="card-link text-primary">
                            <i class="fas fa-times-circle" data-toggle="modal" data-target="#delFav" onclick="delFav('${res.data._id}')"></i>
                        </div>
                    </div>
                </div>
            </li>`

            $("#wish-list").append(wish_content);
        }
    
    });
}

function delFav(_id){
    console.log(_id);
    const api = "/memberApi/delFav";
    var data = {'account':$.cookie('userAccount'),'id':_id};
    $.post(api , data, function (res) {
        const delFav_content =
        `<div class="modal fade show pr-4 d-block" id="delFav" tabindex="-1" aria-labelledby="addFav" aria-modal="true" role="dialog">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-body text-center text-primary">${res.msg}</div>
                </div>
            </div>
        </div>`;
        $('body').append(delFav_content);
        setTimeout("location.href = 'fav-list.html'", 800);
    });

}