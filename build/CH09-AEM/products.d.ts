export declare enum YN {
    y = "y",
    n = "n"
}
export type sch_product = {
    code: string;
    description: string;
    hasPackage: YN;
    hasAttribute: YN;
    pack: string;
    attribute: string;
    scancode: string;
};
export declare class cnt_product implements sch_product {
    code: string;
    description: string;
    hasPackage: YN;
    hasAttribute: YN;
    pack: string;
    attribute: string;
    scancode: string;
    constructor(code?: string, description?: string, hasPackage?: YN, hasAttribute?: YN, pack?: string, attribute?: string, scancode?: string);
    static fromResults(oRows: any): cnt_product[];
    static fromRow(oRow: any): cnt_product;
    static fromBody(body: any): cnt_product;
    static fromEG(oEG: any): cnt_product;
    static fromJson(json: any): cnt_product;
}
