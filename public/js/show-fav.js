getfav();
function getfav() {
    const api = "/memberApi/findfav";
    var data = {'account':$.cookie('userAccount')};
    $.post(api , data, function (res) {
        if(res.data.length == 0) console.log("沒有收藏");
        else{
            for(var i = 0;i < res.data.length;i++){
                showWishlist(res.data[i]);
            }
        }
    });
}

function showWishlist(_id){
    const api = "/productApi/showWishlist";
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
                            <i class="fas fa-times-circle" data-toggle="modal" data-target="#delFav"></i>
                            <i class="fas fa-heart d-none" data-toggle="modal" data-target="#addFav"></i>
                        </div>
                    </div>
                </div>
            </li>`

            $("#wish-list").append(wish_content);
        }
    
    });
}