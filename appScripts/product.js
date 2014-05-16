var product = (function ($) {
    var productsList = ko.observableArray();
    var currentProduct;
    var loadProducts = function () {
        var deferred = $.Deferred();
        $.when(productDAL.getAllProducts())
            .then(function (pList) {
                product.productsList(pList);
                deferred.resolve(pList);
            });
        return deferred;
    };

    var remove = function (deleteProductId) {
        return productDAL.deleteProduct(deleteProductId);
    };
   
    return {
        productsList: productsList,
        loadProducts: loadProducts,
        remove:remove
    };
})(jQuery);