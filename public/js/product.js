
readProducts();
//儲存商品_id
// let _id

function readProducts() {
    const api = "/productApi/readProducts";
    $.get(api, function (data, status) {
        for (var i = 0; i < data.length; i++) {
            newProduct(data[i]);
        }
    })
}

function newProduct(data) {
    let status = (data.status) ? "checked" : "";
    // _id = data._id;
    let member_content =
        `<li class="col-6 col-md-3 mb-8 mb-md-13" data-aos="fade-up">

    <div class="card">
        <a href="product-info.html?id=${data._id}">
            <picture>
                <img src="${data.Img_url}" class="card-img-top" alt="product img">
            </picture>
        </a>
        <div class="card-body">
            <h2 class="card-title h4 mb-0 ${data._id}" id="${data._id}-title">${data.productName}</h2>
            <p class="card-text font-weight-light mb-1">NT$${data.productPrice}</p>
            <div class="card-link text-primary">
            <i class="fas fa-heart ${data._id}" data-toggle="modal" data-target="#addFav"  onclick="addFav('${data._id}')"></i>
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
                    <h2 class="card-title h4 mb-0 ${data._id}" id="${data._id}-title">${data.productName}</h2>
                    <p class="card-text font-weight-light mb-1">NT$${data.productPrice}</p>
                    <div class="card-link text-primary">
                        <a href="edit-product.html?id=${data._id}"><i class="fas fa-pen ${data._id} text-primary"></i></a>
                    </div>
                </div>
            </div>
        </li>`;
    if ($.cookie('userRole') == "admin") {
        $("#product-list").append(admin_content);
    }
    if (data.isDeleted) {
        $("#" + data._id + "-title").append(" 已下架");
        $("#" + data._id + "-title").addClass("text-danger");
    } else if (!data.isDeleted) {
        $("#product-list").append(member_content);
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