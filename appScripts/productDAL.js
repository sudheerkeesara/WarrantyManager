/// <reference path="DAL.js" />
/// <reference path="DBSchema.js" />
var productDAL = (function () {
    var sqlStatement;
    var getAllProducts = function () {
        var deferred = $.Deferred();
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

    var insertProduct = function (values, callBack) {
        var sqlstmt = 'SELECT MAX(id) AS lastId FROM ' + dbSchema.tables[0].name;

        DAL.executeSQL(sqlstmt, function (tx, results) {
            var sqlStatement = 'INSERT INTO ' + dbSchema.tables[0].name + " ";//' (id, productName,price,warrenty_period) VALUES (';
            var cols = '(';
            var vals = '(';
            if (results.rows.item(0).lastId !== null) {
                values.id = results.rows.item(0).lastId + 1;
            }
            else {
                values.id = 1;
            }
            if (values.ProductImage) {
                values.ProductImage = values.id + "-" + values.ProductName + "-pImage.png";
            }
            else {
                values.ProductImage = "NoImage.png";
            }
            if (values.BillImage) {
                values.BillImage = values.id + "-" + values.ProductName + "-bImage.png";
            } else {
                values.BillImage = "NoImage.png";
            }
            var insertedDataColumnNames = Object.keys(values);
            for (var i = 0; i < insertedDataColumnNames.length; i++) {
                cols = cols + insertedDataColumnNames[i];

                if ($.type(values[insertedDataColumnNames[i]]) === "string") {
                    if (values[insertedDataColumnNames[i]].trim().split(" ").length > 0) {
                        values[insertedDataColumnNames[i]] = "'" + values[insertedDataColumnNames[i]] + "'";
                    }
                }
                vals = vals + values[insertedDataColumnNames[i]];
                if (i !== insertedDataColumnNames.length - 1) {
                    cols = cols + ',';
                    vals = vals + ',';
                }
            }
            cols = cols + ')';
            vals = vals + ')';
            sqlStatement = sqlStatement + cols + " VALUES " + vals;

            DAL.executeSQL(sqlStatement, function () {
                if (callBack) {
                    callBack({ 'Id': values.id, 'ProductName': values.ProductName });
                }
            });
        });
    };

    var deleteProduct = function (productId) {
        var deferred = $.Deferred();
        var sqlStatement = 'DELETE FROM ' + dbSchema.tables[0].name + ' WHERE Id=' + productId;
        DAL.executeSQL(sqlStatement, function () {
             deferred.resolve();
        });
        return deferred.promise();
    };

    return {
        getAllProducts: getAllProducts,
        insertProduct: insertProduct,
        deleteProduct: deleteProduct
    };
})();