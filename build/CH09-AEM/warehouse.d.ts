export type Sch_Warehouse = {
    code: number;
    description: string;
};
export declare class Cnt_Warehouse implements Sch_Warehouse {
    code: number;
    description: string;
    constructor(code?: number, description?: string);
    static fromResults(oRows: any): Cnt_Warehouse[];
    static fromRow(oRow: any): Cnt_Warehouse;
    static fromBody(body: any): Cnt_Warehouse;
}
