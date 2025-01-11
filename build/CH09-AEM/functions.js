"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cnt_tranferPallet = void 0;
const pallets_1 = require("./pallets");
class cnt_tranferPallet {
    constructor(pallet, warehouse) {
        console.log("Creating cnt_tranferPallet instance with:", { pallet, warehouse });
        this.pallet = pallet;
        this.warehouse = warehouse;
    }
    static defaultTransfer() {
        return new cnt_tranferPallet(pallets_1.cnt_pallet.defaultPallet(), "");
    }
    // Create from a JSON object
    static fromJson(json) {
        console.log("Parsing cnt_tranferPallet from JSON:", json);
        return new cnt_tranferPallet(pallets_1.cnt_pallet.fromJson(json.pallet), json.warehouse || "");
    }
    // Create multiple instances from an array of JSON objects
    static fromJsonList(jsonList) {
        console.log("Parsing list of cnt_tranferPallet from JSON list:", jsonList);
        return jsonList.map(json => cnt_tranferPallet.fromJson(json));
    }
    // Create from body (e.g., HTTP request body)
    static fromBody(body) {
        console.log("Parsing cnt_tranferPallet from HTTP body:", body);
        return new cnt_tranferPallet(pallets_1.cnt_pallet.fromBody(body.pallet), body.warehouse || "");
    }
}
exports.cnt_tranferPallet = cnt_tranferPallet;
