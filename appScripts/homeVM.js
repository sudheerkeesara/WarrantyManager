var homeVM = (function ($) {
    var products;
    var init = function () {
        dbSchema.createOrOpenDB();
        dbSchema.createOrGetTable();
        //$.when(product.loadProducts())
        //    .then(function (pList) {
        //    products = product.productsList;
        //    $('#idProductList').listview('refresh');
        //    });
    };
    var removeProduct = function (item) {
        //products.remove(this);
        //product.remove(item.Id);
    };
    init();
    return {
        products: products,
        init: init,
        removeProduct: removeProduct
    };
})(jQuery);