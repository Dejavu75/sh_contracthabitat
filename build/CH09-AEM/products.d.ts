export declare enum YN {
    Y = "Y",
    N = "N"
}
export type sch_product = {
    code: string;
    description: string;
    hasBulks: YN;
    hasAttributes: YN;
};
export declare class cnt_product implements sch_product {
    code: string;
    description: string;
    hasBulks: YN;
    hasAttributes: YN;
    constructor(code?: string, description?: string, hasBulks?: YN, hasAttributes?: YN);
    static fromResults(oRows: any): cnt_product[];
    static fromRow(oRow: any): cnt_product;
    static fromBody(body: any): cnt_product;
    static fromEG(oEG: any): cnt_product;
}
