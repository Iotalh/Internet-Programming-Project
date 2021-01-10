
readProducts();
//儲存商品_id
let _id

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
   _id = data._id;
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
            <i class="fas fa-heart ${data._id}" data-toggle="modal" data-target="#addFav" onclick="addFav(_id)"></i>
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

function updateProduct(productId) {
    const api = "http://localhost:3000/api/updateProduct";
    // TODO
}

function addProduct() {
    console.log("addProduct");
    var _name = $('#productName').val();
    var _link = $('#productLink').val();
    var _price = $('#productPrice').val();
    var _tag = $('#productTag').val();
    var _detail = $('#productDetail').val();
    var _available = $('#productAvailable').val();
    if (!_name || !_link || !_price || !_tag || !_detail || !_available) {
        alert("請輸入未填欄位！");
    } else {
        var api = "/productApi/createProduct";
        var data = {
            'productName': _name,
            'Img_url': _link,
            'productPrice': _price,
            'productDetail': _detail,
            'tags': _tag,
            'isDeleted': _available
        };
        $.post(api, data, function (res) {
            if (res.status == 0) {
                alert("新增成功");
            }else{
                alert("失敗");
            }
        });
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