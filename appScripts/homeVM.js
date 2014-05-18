var homeVM = (function ($) {
    //var products;
    var init = function () {
        setupData();
         loadData();
    };

    var setupData = function () {
        dbSchema.createOrOpenDB();
        dbSchema.createOrGetTable();
    };

    var loadData = function () {
      
        $.when(product.loadProducts())
            .then(function (pList) {
                //homeVM.products = product.productsList;
                $('#idProductList').listview('refresh');
            });
    };

    var products = function () {
        return product.productsList;
    };

    var addProduct = function () {

        var productDetails = {
            'ProductName': 'iPhone2',
            'Category': 'Mobile',
            'Brand': 'Apple',
            'ModelNumber': 'Mod2',
            'SerialNumber': 'SER2',
            'ProductImage': 'false',//based on it's value as true or false name will image name will be stored in sqlDB.
            'Price': '24000',
            'PurchasedDate': '05/02/2014',
            'WarrantyExpiresBy': '05/02/2015',
            'PurchasedAt': 'Big C',
            'BillImage': 'false',//based on it's value as true or false name will image name will be stored in sqlDB.
            'ServiceCenterNumber': '1800500759',
            'CompanyContactNumber': '1800500749',
            'CompanyUserName': 'keesara.sudheer@gmail.com',
            'CompanyPassword': 'ak47Fires',
            'LatestComplaintDetails': '',
            'Notes': 'This is iPhone 4S'
        };

        productDAL.insertProduct(productDetails, function (insertedProduct) {
            //var pname = insertedProduct.ProductName.replace("'", "").replace("'", "");
            //var productImageName = insertedProduct.Id + "-" + pname + "-pImage.png";
            //var productBillImageName = insertedProduct.Id + "-" + pname + "-bImage.png";
            //deviceFileOperation.moveFile(productImageURI, productImageName);
            //deviceFileOperation.moveFile(productBillImageURI, productBillImageName);
            alert('new product added');
        });

    };

    var removeProduct = function (item) {
        $.when(product.remove(item.Id))
           .then(function (pList) {
               alert('product removed');
               loadData();
           });
    };

    var showProductDetails = function (item) {
        tempObj.currentProductId = item.Id;
        product.setCurrentProduct(item.Id);
        $.mobile.changePage("#product-page1");
    };

    init();
    return {
        products: products,
        init: init,
        removeProduct: removeProduct,
        addProduct: addProduct,
        showProductDetails:showProductDetails
    };
})(jQuery);