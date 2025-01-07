import { cnt_pallet } from "./pallets";


export type sch_tranferPallet = {
    pallet: cnt_pallet;
    warehouse: string;
};

export class cnt_tranferPallet implements sch_tranferPallet {
    pallet: cnt_pallet;
    warehouse: string;

    constructor(pallet: cnt_pallet, warehouse: string) {
        console.log("Creating cnt_tranferPallet instance with:", { pallet, warehouse });
        this.pallet = pallet;
        this.warehouse = warehouse;
    }
    static defaultTransfer(): cnt_tranferPallet {
        return new cnt_tranferPallet(cnt_pallet.defaultPallet(), "");
    }
    // Create from a JSON object
    static fromJson(json: any): cnt_tranferPallet {
        console.log("Parsing cnt_tranferPallet from JSON:", json);
        return new cnt_tranferPallet(
            cnt_pallet.fromJson(json.pallet),
            json.warehouse || ""
        );
    }

    // Create multiple instances from an array of JSON objects
    static fromJsonList(jsonList: any[]): cnt_tranferPallet[] {
        console.log("Parsing list of cnt_tranferPallet from JSON list:", jsonList);
        return jsonList.map(json => cnt_tranferPallet.fromJson(json));
    }

    // Create from body (e.g., HTTP request body)
    static fromBody(body: any): cnt_tranferPallet {
        console.log("Parsing cnt_tranferPallet from HTTP body:", body);
        return new cnt_tranferPallet(
            cnt_pallet.fromBody(body.pallet),
            body.warehouse || ""
        );
    }
}
