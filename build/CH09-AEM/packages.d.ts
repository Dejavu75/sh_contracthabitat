import { sch_product } from "./products";
export declare enum stock_unit_status {
    active = "active",
    inactive = "inactive",
    damaged = "damaged",
    dismantled = "dismantled"
}
export type sch_package = {
    code: number;
    description: string;
    warehouse: string;
    status: stock_unit_status;
    creationDate: Date;
    dismantleDate: Date | null;
    products: sch_product[];
    notes: string;
};
export declare class cnt_package implements sch_package {
    code: number;
    description: string;
    warehouse: string;
    status: stock_unit_status;
    creationDate: Date;
    dismantleDate: Date | null;
    products: sch_product[];
    notes: string;
    constructor(code?: number, description?: string, warehouse?: string, status?: stock_unit_status, creationDate?: Date, dismantleDate?: Date | null, products?: sch_product[], notes?: string);
    static fromResults(oRows: any): cnt_package[];
    static fromRow(oRow: any): cnt_package;
    static fromBody(body: any): cnt_package;
}
