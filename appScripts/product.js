var product = (function ($) {
    var currentProductId = null;
    var currentProduct = null;
    var productsList = ko.observableArray();
    var loadProducts = function () {
        var deferred = $.Deferred();
        $.when(productDAL.getAllProducts())
            .then(function (pList) {
                product.productsList(pList);
                deferred.resolve(pList);
            });
        return deferred;
    };

    var setCurrentProduct = function (id) {
        product.currentProductId = id;
        product.currentProduct = _.find(productsList(), function (product) { return product.Id == id; });

        //cProduct=_.find(productsList(), function (product) { return product.Id == currentProductId; });
        //if (cProduct)
        //{
        //    return cProduct;
        //}
        //else
        //{
        //    return null;
        //}
    };

    var getCurrentProduct = function (id) {
        cProduct = _.find(productsList(), function (product) { return product.Id == id; });
        if (cProduct)
        {
            return cProduct;
        }
        else
        {
            return null;
        }
    };

    var remove = function (deleteProductId) {
        return productDAL.deleteProduct(deleteProductId);
    };
   
    return {
        currentProductId: currentProductId,
        currentProduct:currentProduct,
        setCurrentProduct: setCurrentProduct,
        getCurrentProduct:getCurrentProduct,
        productsList: productsList,
        loadProducts: loadProducts,
        remove:remove
    };
})(jQuery);