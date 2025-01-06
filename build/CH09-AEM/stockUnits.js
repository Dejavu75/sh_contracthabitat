"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cnt_StockUnit = exports.StockUnitType = void 0;
var StockUnitType;
(function (StockUnitType) {
    StockUnitType["product"] = "product";
    StockUnitType["pack"] = "pack";
    StockUnitType["pallet"] = "pallet";
})(StockUnitType || (exports.StockUnitType = StockUnitType = {}));
class Cnt_StockUnit {
    constructor(code = 0, packageParam = "", // Renamed parameter to avoid conflict
    attribute = "", batch = "", quantity = 0, warehouse = "", type = StockUnitType.product, packageCode = null) {
        this.code = code;
        this.package = packageParam;
        this.attribute = attribute;
        this.batch = batch;
        this.quantity = quantity;
        this.warehouse = warehouse;
        this.type = type;
        this.packageCode = packageCode;
    }
    // Create instances from an array of results
    static fromResults(oRows) {
        const results = [];
        for (let i = 0; i < oRows.length; i++) {
            results.push(Cnt_StockUnit.fromRow(oRows[i]));
        }
        return results;
    }
    // Create a single instance from a database row
    static fromRow(oRow) {
        return new Cnt_StockUnit(oRow.code || 0, oRow.package || "", oRow.attribute || "", oRow.batch || "", oRow.quantity || 0, oRow.warehouse || "", oRow.type || StockUnitType.product, oRow.packageCode || null);
    }
    // Create an instance from a request body (e.g., HTTP request body)
    static fromBody(body) {
        return new Cnt_StockUnit(body.code || 0, body.package || "", body.attribute || "", body.batch || "", body.quantity || 0, body.warehouse || "", body.type || StockUnitType.product, body.packageCode || null);
    }
}
exports.Cnt_StockUnit = Cnt_StockUnit;
