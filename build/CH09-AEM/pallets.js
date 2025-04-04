"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cnt_pallet = exports.stock_unit_status = void 0;
const products_1 = require("./products");
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
    static defaultPallet() {
        return new cnt_pallet(0, "", "", stock_unit_status.active, new Date(), null, [], "");
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
        return new cnt_pallet(oRow.code || 0, oRow.description || "", oRow.warehouse || "", oRow.status || stock_unit_status.active, oRow.creationDate ? new Date(oRow.creationDate) : new Date(), oRow.dismantleDate ? new Date(oRow.dismantleDate) : null, (oRow.products || []).map((product) => products_1.cnt_product.fromJson(product)), oRow.notes || "");
    }
    // Create an instance from an HTTP request body
    static fromBody(body) {
        return new cnt_pallet(body.code || 0, body.description || "", body.warehouse || "", body.status || stock_unit_status.active, body.creationDate ? new Date(body.creationDate) : new Date(), body.dismantleDate ? new Date(body.dismantleDate) : null, (body.products || []).map((product) => products_1.cnt_product.fromJson(product)), body.notes || "");
    }
    static fromJson(json) {
        //console.log("Parsing cnt_pallet from JSON:", json);
        return new cnt_pallet(json.code || 0, json.description || "", json.warehouse || "", json.status || stock_unit_status.active, json.creationDate ? new Date(json.creationDate) : new Date(), json.dismantleDate ? new Date(json.dismantleDate) : null, (json.products || []).map((product) => products_1.cnt_product.fromJson(product)), json.notes || "");
    }
    static fromAGES(json) {
        const statusMap = {
            0: stock_unit_status.active,
            1: stock_unit_status.inactive,
            2: stock_unit_status.damaged,
            3: stock_unit_status.dismantled
        };
        const status = statusMap[json.estado] || stock_unit_status.active;
        const dismantleDate = (json.desarme && json.desarme !== "0000-00-00T00:00:00")
            ? new Date(json.desarme)
            : null;
        return new cnt_pallet(json.id || 0, json.detalle || "", json.deposito || "", status, json.fecha ? new Date(json.fecha) : new Date(), dismantleDate, [], // No viene array de productos desde GES
        json.alias || "");
    }
}
exports.cnt_pallet = cnt_pallet;
