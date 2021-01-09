getList();
function getList() {
    const api = "http://localhost:3000/api/readProduct";
    $.get(api, function (data, status) {
        for (var i = 0; i < data.length; i++) {
            newList(data[i]);
        }
    })
}
function newProduct(data) {
    let status = (data.status) ? "checked" : "";
    let member_content =
        `<li class="col-6 col-md-3 mb-8 mb-md-13" data-aos="fade-up">
    <div class="card">
        <a href="product-info.html?id=${data.id}">
            <picture>
                <source srcset="img/product/item-${data.id}.png, img/product/item-${data.id}@2x.png 2x"
                    media="(mix-width: 768px)">
                <source
                    srcset="img/product/mobile/item-${data.id}-mobile.png, img/product/mobile/item-${data.id}-mobile@2x.png 2x"
                    media="(max-width: 576px)">
                <img src="img/product/item-${data.id}.png" class="card-img-top" alt="product img">
            </picture>
        </a>
        <div class="card-body">
            <h2 class="card-title h4 mb-0">${data.productName}</h2>
            <p class="card-text font-weight-light mb-1">NT$${data.productPrice}</p>
            <div class="card-link text-primary">
            <i class="fas fa-heart ${data.id}" data-toggle="modal" data-target="#addFav"></i>
            <i class="fas fa-shopping-cart pl-1 ${data.id}" data-toggle="modal" data-target="#addCart"></i>
            </div>
        </div>
    </div>
</li>`;
    let admin_content =
        `<li class="col-6 col-md-3 mb-8 mb-md-13" data-aos="fade-up">
<div class="card">
    <a href="product-info.html?id=${data.id}">
        <picture>
            <source srcset="img/product/item-${data.id}.png, img/product/item-${data.id}@2x.png 2x"
                media="(mix-width: 768px)">
            <source
                srcset="img/product/mobile/item-${data.id}-mobile.png, img/product/mobile/item-${data.id}-mobile@2x.png 2x"
                media="(max-width: 576px)">
            <img src="img/product/item-${data.id}.png" class="card-img-top" alt="product img">
        </picture>
    </a>
    <div class="card-body">
        <h2 class="card-title h4 mb-0">${data.productName}</h2>
        <p class="card-text font-weight-light mb-1">NT$${data.productPrice}</p>
        <div class="card-link text-primary">
        <a href="edit-product.html?id=${data.id}"><i class="fas fa-pen ${data.id}"></i></a>
            <i class="fas fa-times ${data.id}" onclick="delProduct(${data.id})"></i>
            <i class="fas fa-heart ${data.id}" data-toggle="modal" data-target="#addFav"></i>
            <i class="fas fa-shopping-cart pl-1 ${data.id}" data-toggle="modal" data-target="#addCart"></i>
        </div>
    </div>
</div>
</li>`;
    if (data.userRole == "admin") {
        $("#product-list").append(admin_content);
    } else {
        $("#product-list").append(member_content);
    }
}

function delProduct(productId) {
    const api = "http://localhost:3000/api/deleteProdect";
    // TODO
}