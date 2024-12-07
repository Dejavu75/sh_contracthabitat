export declare enum YN {
    Y = "Y",
    N = "N"
}
export type sch_products = {
    code: string;
    description: string;
    hasBulks: YN;
    hasAttributes: YN;
};
export declare class cnt_products implements sch_products {
    code: string;
    description: string;
    hasBulks: YN;
    hasAttributes: YN;
    constructor(code?: string, description?: string, hasBulks?: YN, hasAttributes?: YN);
    static fromResults(oRows: any): cnt_products[];
    static fromRow(oRow: any): cnt_products;
    static fromBody(body: any): cnt_products;
    static fromEG(oEG: any): cnt_products;
}
