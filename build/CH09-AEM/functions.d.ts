import { cnt_pallet } from "./pallets";
export type sch_tranferPallet = {
    pallet: cnt_pallet;
    warehouse: string;
};
export declare class cnt_tranferPallet implements sch_tranferPallet {
    pallet: cnt_pallet;
    warehouse: string;
    constructor(pallet: cnt_pallet, warehouse: string);
    static defaultTransfer(): cnt_tranferPallet;
    static fromJson(json: any): cnt_tranferPallet;
    static fromJsonList(jsonList: any[]): cnt_tranferPallet[];
    static fromBody(body: any): cnt_tranferPallet;
}
