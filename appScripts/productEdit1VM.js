var productEdit1VM = (function ($) {
    var currentProduct = ko.observable({ ProductName: 'Empty' });
    var init = function () {
        $(document).on("pagebeforeshow", "#product-page1", function () {
            currentProduct(product.getCurrentProduct(tempObj.currentProductId));
        });
    };
    init();
    return{
        currentProduct:currentProduct
    };
})(jQuery);