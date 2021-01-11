# Perfume Online Shopping

Internet Programming Final Projects

# 企劃書

# 目錄

[一、主題](https://github.com/Iotalh/Internet-Programming-Project#%E4%B8%80%E4%B8%BB%E9%A1%8C)
[二、緣由動機與目的（興趣導向）](https://github.com/Iotalh/Internet-Programming-Project#%E4%BA%8C%E7%B7%A3%E7%94%B1%E5%8B%95%E6%A9%9F%E8%88%87%E7%9B%AE%E7%9A%84%E8%88%88%E8%B6%A3%E5%B0%8E%E5%90%91)
[三、使用方法](https://github.com/Iotalh/Internet-Programming-Project#%E4%B8%89%E4%BD%BF%E7%94%A8%E6%96%B9%E6%B3%95)
[四、開發流程規劃](https://github.com/Iotalh/Internet-Programming-Project#%E5%9B%9B%E9%96%8B%E7%99%BC%E6%B5%81%E7%A8%8B%E8%A6%8F%E5%8A%83)
[五、系統架構](https://github.com/Iotalh/Internet-Programming-Project#%E4%BA%94%E7%B3%BB%E7%B5%B1%E6%9E%B6%E6%A7%8B)
[六、網站樣貌呈現](https://github.com/Iotalh/Internet-Programming-Project#%E5%85%AD%E7%B6%B2%E7%AB%99%E6%A8%A3%E8%B2%8C%E5%91%88%E7%8F%BE)


# 一、主題

香水販售平台

# 二、緣由動機與目的（興趣導向）

## 動機：

自從組員開始使用香水後，對香水產生了興趣，但是網路上似乎一直都沒有一個專門販售多種香水的平台，所以我們的主題就決定製作一個這樣的平台。

## 目的：

- 幫助使用者更快地找到適合自己的香水
- 方便香水喜愛者出售自己的香水

# 三、使用方法

1. Clone 一份至本地端
    ```
    git clone git@github.com:Iotalh/Internet-Programming-Project.git
    ```
2. 安裝套件
    ```
    npm install
    ```
3. 啟動 Mongodb 與本地端伺服器
    ```
    mongo
    npm start
    ```
4. 連結至 `http://127.0.0.1:3000/public/index.html`

# 四、開發流程規劃

## 功能介紹

除了香水販售之外，也提供個人收藏香水的平台。

# 五、系統架構

## 使用的套件

- mongodb
- mongoose
- node.js
- express
- express-generator
- bcrypt

## 資料表設計

### Database

| 項目 | 名稱 |
| --------- | --- |
| 資料庫名稱 | Project_Perfume |
| 會員資料表 | Accounts |
| 商品資料表 | Products |

### Models

| 檔名 | 說明 |
| --------- | --- |
| member-model.js | 會員資料表 |
| product-model.js | 商品資料表 |

### Accounts

| _id: ObjectId | userRole: enum | userName: String | account: String | hashValue: String | favItems(FK): Array |
| --- | --- | --- | --- | --- | --- |
| ObjectId | admin | admin | admin@mail.com | hashValue | ObjectId from Product |
| ObjectId | member | member | member@mail.com | hashValue | ObjectId from Product |

### Products

| _id: ObjectId | productName: String | Img_url: String | productPrice: Number | | productDetail: String | tags: String | isDeleted: boolean |
| --- | --- | --- | --- | --- | --- |
| ObjectId | Perfume1 | item-1.png | 1490 | 商品介紹文字 | 男用 | false |
| ObjectId | Perfume2 | item-2.png | 2490 | 商品介紹文字 | 女用 | true |

## API

| 檔名 | 說明 |
| --------- | --- |
| member-api.js | 會員 API |
| product-api.js | 商品 API |

| API | 說明 |
| --- | --- |
| login | 登入 |
| logout | 登出 |
| register | 建立會員 |
| changePW | 更改密碼 |
| updateMember | 更新會員資料 |
| readMember | 讀取會員資料 |
| createProduct | 新增商品 |
| readProducts | 讀取商品資料 |
| chooseProduct | 讀取要更新的商品 |
| updateProduct | 更新商品資料 |
| findByID | 用商品的 _id 取得商品資料 |
| addFav | 新增收藏商品 |
| findFav | 讀取收藏商品 |
| delFav | 刪除收藏商品 |

## 前後端關聯性

前端會依據下列資訊做出顯示資訊的不同。

- 帳號
    - 收藏的產品
- 身分
    - 管理員
    - 會員

## 各個頁面主要功能

- `index` 首頁
    - 所有使用者會看到相同的內容
- `product-list` 商品總覽
    - 顯示香水簡易資訊
        - 所有會員：
            - 使用者可以進行收藏的動作
- `add-product` 新增商品
    - 管理員：
        - 可以新增和刪除商品
- `edit-product` 編輯商品資料
    - 管理員：
        - 可以編輯商品
- `product-info` 商品詳細介紹
    - 介紹商品的詳細訊息
    - 所有會員：
        - 可以進行收藏的動作
- `login` 登入
    - 所有會員：
        - 使用者認證身份
- `signup` 註冊
    - 會員註冊
- `mypage` 修改密碼
    - 使用者密碼在後端會進行加密
- `fav-list` 商品收藏
    - 所有會員:
        - 登入後會根據使用者的收藏顯示

# 六、網站樣貌呈現

## 外觀設計

- 首頁
    ![](https://i.imgur.com/3jlBXiv.png)
    ![](https://i.imgur.com/8zOvKar.png)
- 登入
    ![](https://i.imgur.com/fkdYO2G.png)
- 註冊
    ![](https://i.imgur.com/adb77ML.png)
- 修改密碼
    ![](https://i.imgur.com/KZffmip.png)
- 商品總覽
    ![](https://i.imgur.com/xR2DyBs.png)
- 商品詳細介紹
    ![](https://i.imgur.com/HudIXsB.png)
- 新增商品
    ![](https://i.imgur.com/wbsBuaj.png)
- 編輯商品
    ![](https://i.imgur.com/wshXOIO.png)