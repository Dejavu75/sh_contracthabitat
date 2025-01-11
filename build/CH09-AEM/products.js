"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cnt_product = exports.YN = void 0;
var YN;
(function (YN) {
    YN["y"] = "y";
    YN["n"] = "n";
})(YN || (exports.YN = YN = {}));
class cnt_product {
    // Constructor with default values
    constructor(code = "", description = "", hasPackage = YN.n, hasAttribute = YN.n, pack = "", attribute = "") {
        this.code = "";
        this.description = "";
        this.hasPackage = YN.n; // Default value for YN type
        this.hasAttribute = YN.n;
        this.pack = ""; // Default empty string
        this.attribute = ""; // Default empty string
        this.code = code;
        this.description = description;
        this.hasPackage = hasPackage;
        this.hasAttribute = hasAttribute;
        this.pack = pack;
        this.attribute = attribute;
    }
    // Create instances from an array of results
    static fromResults(oRows) {
        let result = [];
        for (let i = 0; i < oRows.length; i++) {
            result.push(cnt_product.fromRow(oRows[i]));
        }
        return result;
    }
    // Create a single instance from a database row
    static fromRow(oRow) {
        return new cnt_product(oRow.code || "", oRow.description || "", oRow.hasPackage || YN.n, oRow.hasAttribute || YN.n, oRow.pack || "", oRow.attribute || "");
    }
    // Create an instance from a body (e.g., HTTP request body)
    static fromBody(body) {
        return new cnt_product(body.code || "", body.description || "", body.hasPackage || YN.n, body.hasAttribute || YN.n, body.pack || "", body.attribute || "");
    }
    // Example method to generate a product from an external object
    static fromEG(oEG) {
        return new cnt_product(oEG.code || "", oEG.description || "", oEG.hasPackage || YN.n, oEG.hasAttribute || YN.n, oEG.pack || "", oEG.attribute || "");
    }
    static fromJson(json) {
        console.log("Parsing cnt_product from JSON:", json);
        return new cnt_product(json.code || "", json.description || "", json.hasPackage === "y" ? YN.y : YN.n, json.hasAttribute === "y" ? YN.y : YN.n, json.pack || "", json.attribute || "");
    }
}
exports.cnt_product = cnt_product;
