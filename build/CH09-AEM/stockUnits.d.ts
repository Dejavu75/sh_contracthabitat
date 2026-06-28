import { cnt_product } from "./products";
export declare enum StockUnitType {
    product = "product",
    pack = "pack",
    pallet = "pallet"
}
export type Sch_StockUnit = {
    code: number;
    package: string;
    attribute: string;
    batch: string;
    quantity: number;
    warehouse: string;
    type: StockUnitType;
    packageCode: number | null;
    product: cnt_product | null;
};
export declare class Cnt_StockUnit implements Sch_StockUnit {
    code: number;
    package: string;
    attribute: string;
    batch: string;
    quantity: number;
    warehouse: string;
    type: StockUnitType;
    packageCode: number | null;
    product: cnt_product | null;
    constructor(code?: number, packageParam?: string, // Renamed parameter to avoid conflict
    attribute?: string, batch?: string, quantity?: number, warehouse?: string, type?: StockUnitType, packageCode?: number | null, product?: cnt_product | null);
    static fromResults(oRows: any): Cnt_StockUnit[];
    static fromRow(oRow: any): Cnt_StockUnit;
    static fromBody(body: any): Cnt_StockUnit;
    static fromJson(json: any): Cnt_StockUnit;
}
