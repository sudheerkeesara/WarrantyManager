
//$(function () {
    

//})

$(document).ready(function () {
    //document.addEventListener("deviceready", onDeviceReady, false);

    //ko.applyBindings(homeVM, document.getElementById("#product-list"));
    ko.applyBindings(homeVM, $(document).find('#product-list')[0]);

    //ko.applyBindings(productEdit1VM, document.getElementById("#product-page1"));
    ko.applyBindings(productEdit1VM, $(document).find('#product-page1')[0]);
});

var tempObj = {
};