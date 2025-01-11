export type Sch_Warehouse = {
    code: String;
    description: String;
};
export declare class Cnt_Warehouse implements Sch_Warehouse {
    code: String;
    description: String;
    constructor(code?: String, description?: String);
    static fromResults(oRows: any): Cnt_Warehouse[];
    static fromRow(oRow: any): Cnt_Warehouse;
    static fromBody(body: any): Cnt_Warehouse;
}
