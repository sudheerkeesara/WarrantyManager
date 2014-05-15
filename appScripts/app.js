function onDeviceReady() {

}

$(function () {
    //document.addEventListener("deviceready", onDeviceReady, false);
    ko.applyBindings(homeVM, document.getElementById("#product-list"));
})