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
    constructor(code?: number, packageParam?: string, // Renamed parameter to avoid conflict
    attribute?: string, batch?: string, quantity?: number, warehouse?: string, type?: StockUnitType, packageCode?: number | null);
    static fromResults(oRows: any): Cnt_StockUnit[];
    static fromRow(oRow: any): Cnt_StockUnit;
    static fromBody(body: any): Cnt_StockUnit;
}
