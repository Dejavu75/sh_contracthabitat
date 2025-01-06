"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cnt_pallet = exports.stock_unit_status = void 0;
var stock_unit_status;
(function (stock_unit_status) {
    stock_unit_status["active"] = "active";
    stock_unit_status["inactive"] = "inactive";
    stock_unit_status["damaged"] = "damaged";
    stock_unit_status["dismantled"] = "dismantled";
})(stock_unit_status || (exports.stock_unit_status = stock_unit_status = {}));
class cnt_pallet {
    constructor(code = 0, description = "", warehouse = "", status = stock_unit_status.active, creationDate = new Date(), dismantleDate = null, products = [], notes = "") {
        this.code = code;
        this.description = description;
        this.warehouse = warehouse;
        this.status = status;
        this.creationDate = creationDate;
        this.dismantleDate = dismantleDate;
        this.products = products;
        this.notes = notes;
    }
    // Create instances from a result array
    static fromResults(oRows) {
        let result = [];
        for (let i = 0; i < oRows.length; i++) {
            result.push(cnt_pallet.fromRow(oRows[i]));
        }
        return result;
    }
    // Create an instance from a database row
    static fromRow(oRow) {
        return new cnt_pallet(oRow.code || 0, oRow.description || "", oRow.warehouse || "", oRow.status || stock_unit_status.active, oRow.creationDate ? new Date(oRow.creationDate) : new Date(), oRow.dismantleDate ? new Date(oRow.dismantleDate) : null, oRow.products || [], oRow.notes || "");
    }
    // Create an instance from an HTTP request body
    static fromBody(body) {
        return new cnt_pallet(body.code || 0, body.description || "", body.warehouse || "", body.status || stock_unit_status.active, body.creationDate ? new Date(body.creationDate) : new Date(), body.dismantleDate ? new Date(body.dismantleDate) : null, body.products || [], body.notes || "");
    }
}
exports.cnt_pallet = cnt_pallet;
