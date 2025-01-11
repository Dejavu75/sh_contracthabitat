"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cnt_Warehouse = void 0;
// Define the class for Warehouse
class Cnt_Warehouse {
    constructor(code = 0, description = "") {
        this.code = code;
        this.description = description;
    }
    // Create instances from an array of results
    static fromResults(oRows) {
        const results = [];
        for (let i = 0; i < oRows.length; i++) {
            results.push(Cnt_Warehouse.fromRow(oRows[i]));
        }
        return results;
    }
    // Create a single instance from a database row
    static fromRow(oRow) {
        return new Cnt_Warehouse(oRow.code || 0, oRow.description || "");
    }
    // Create an instance from a request body (e.g., HTTP request body)
    static fromBody(body) {
        return new Cnt_Warehouse(body.code || 0, body.description || "");
    }
}
exports.Cnt_Warehouse = Cnt_Warehouse;
