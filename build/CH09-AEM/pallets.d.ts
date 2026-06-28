import { Cnt_StockUnit } from "./stockUnits";
export declare enum stock_unit_status {
    active = "active",
    inactive = "inactive",
    damaged = "damaged",
    dismantled = "dismantled"
}
export type sch_pallet = {
    code: number;
    description: string;
    warehouse: string;
    status: stock_unit_status;
    creationDate: Date;
    dismantleDate: Date | null;
    products: Cnt_StockUnit[];
    notes: string;
};
export declare class cnt_pallet implements sch_pallet {
    code: number;
    description: string;
    warehouse: string;
    status: stock_unit_status;
    creationDate: Date;
    dismantleDate: Date | null;
    products: Cnt_StockUnit[];
    notes: string;
    constructor(code?: number, description?: string, warehouse?: string, status?: stock_unit_status, creationDate?: Date, dismantleDate?: Date | null, products?: Cnt_StockUnit[], notes?: string);
    static defaultPallet(): cnt_pallet;
    static fromResults(oRows: any): cnt_pallet[];
    static fromRow(oRow: any): cnt_pallet;
    static fromBody(body: any): cnt_pallet;
    static fromJson(json: any): cnt_pallet;
    static fromAGES(json: any): cnt_pallet;
}
