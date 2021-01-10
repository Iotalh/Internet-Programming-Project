readProducts();
function readProducts() {
    const api = "http://localhost:3000/api/readProducts";
    $.get(api, function (data, status) {
        for (var i = 0; i < data.length; i++) {
            newProduct(data[i]);
        }
    })
}
function newProduct(data) {
    let status = (data.status) ? "checked" : "";
    let member_content =
        `<li class="col-6 col-md-3 mb-8 mb-md-13" data-aos="fade-up">
    <div class="card">
        <a href="product-info.html?id=${data._id}">
            <picture>
                <img src="${data.Img_url}" class="card-img-top" alt="product img">
            </picture>
        </a>
        <div class="card-body">
            <h2 class="card-title h4 mb-0 ${data._id}">${data.productName}</h2>
            <p class="card-text font-weight-light mb-1">NT$${data.productPrice}</p>
            <div class="card-link text-primary">
            <i class="fas fa-heart ${data._id}" data-toggle="modal" data-target="#addFav" onclick="addFav()"></i>
            <i class="fas fa-shopping-cart pl-1 ${data._id}" data-toggle="modal" data-target="#addCart"></i>
            </div>
        </div>
    </div>
</li>`;
    let admin_content =
        `<li class="col-6 col-md-3 mb-8 mb-md-13" data-aos="fade-up">
<div class="card">
    <a href="product-info.html?id=${data._id}">
        <picture>
            <img src="${data.Img_url}" class="card-img-top" alt="product img">
        </picture>
    </a>
    <div class="card-body">
        <h2 class="card-title h4 mb-0 ${data._id}">${data.productName}</h2>
        <p class="card-text font-weight-light mb-1">NT$${data.productPrice}</p>
        <div class="card-link text-primary">
            <a href="edit-product.html?id=${data._id}"><i class="fas fa-pen ${data._id}"></i></a>
        </div>
    </div>
</div>
</li>`;
    if (data.userRole == "admin") {
        $("#product-list").append(admin_content);
    } else {
        $("#product-list").append(member_content);
    }
    if (data.isDeleted) {
        $(".card-title, .${data._id}").append(" 已下架").addClass("text-danger");
    }
}

isAdmin();
function isAdmin() {
    console.log("判斷管理員");
    if ($.cookie("userRole") == "admin") {
        console.log("管理員");
        const addProduct =
            `<li class="nav-item pr-7">
            <a class="nav-link h5 font-weight-normal my-auto" href="add-product.html">Add Product</a>
        </li>`;
        $(".brands").append(addProduct);
    }
}