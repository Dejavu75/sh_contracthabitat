"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cnt_products = exports.YN = void 0;
var YN;
(function (YN) {
    YN["Y"] = "Y";
    YN["N"] = "N";
})(YN || (exports.YN = YN = {}));
class cnt_products {
    // Constructor with default values
    constructor(code = "", description = "", hasBulks = YN.N, hasAttributes = YN.N) {
        this.code = "";
        this.description = "";
        this.hasBulks = YN.N; // Default value for YN type
        this.hasAttributes = YN.N;
        this.code = code;
        this.description = description;
        this.hasBulks = hasBulks;
        this.hasAttributes = hasAttributes;
    }
    // Create instances from an array of results
    static fromResults(oRows) {
        let arRes = [];
        for (let i = 0; i < oRows.length; i++) {
            arRes.push(cnt_products.fromRow(oRows[i]));
        }
        return arRes;
    }
    // Create a single instance from a database row
    static fromRow(oRow) {
        return new cnt_products(oRow.code || "", oRow.description || "", oRow.hasBulks || YN.N, oRow.hasAttributes || YN.N);
    }
    // Create an instance from a body (e.g., HTTP request body)
    static fromBody(body) {
        return new cnt_products(body.code || "", body.description || "", body.hasBulks || YN.N, body.hasAttributes || YN.N);
    }
    // Example method to generate a product from an external object
    static fromEG(oEG) {
        return new cnt_products(oEG.code || "", oEG.description || "", oEG.hasBulks || YN.N, oEG.hasAttributes || YN.N);
    }
}
exports.cnt_products = cnt_products;
