/// <reference path="DAL.js" />
/// <reference path="DBSchema.js" />
var productDAL = (function () {
    var sqlStatement;
    var getAllProducts = function () {
        var deferred = $.Deffered();
        sqlStatement = 'SELECT Id,ProductName FROM productList';
        DAL.executeSQL(sqlStatement, function (tx, results) {
            var dbproducts = [];
            for (var i = 0; i < results.rows.length; i++) {
                dbproducts.push(results.rows.item(i));
            }
            deferred.resolve(dbproducts);
        });
        return deferred.promise();
    };
    return {
        getAllProducts: getAllProducts,
    };
})();