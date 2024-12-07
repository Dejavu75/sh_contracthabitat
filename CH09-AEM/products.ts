export enum YN {
    Y = "Y",
    N = "N",
}

export type sch_products = {
    code: string;
    description: string;
    hasBulks: YN;
    hasAttributes: YN;
};

export class cnt_products implements sch_products {
    code: string = "";
    description: string = "";
    hasBulks: YN = YN.N; // Default value for YN type
    hasAttributes: YN = YN.N;

    // Constructor with default values
    constructor(
        code: string = "",
        description: string = "",
        hasBulks: YN = YN.N,
        hasAttributes: YN = YN.N
    ) {
        this.code = code;
        this.description = description;
        this.hasBulks = hasBulks;
        this.hasAttributes = hasAttributes;
    }

    // Create instances from an array of results
    static fromResults(oRows: any): cnt_products[] {
        let arRes: cnt_products[] = [];
        for (let i = 0; i < oRows.length; i++) {
            arRes.push(cnt_products.fromRow(oRows[i]));
        }
        return arRes;
    }

    // Create a single instance from a database row
    static fromRow(oRow: any): cnt_products {
        return new cnt_products(
            oRow.code || "",
            oRow.description || "",
            oRow.hasBulks || YN.N,
            oRow.hasAttributes || YN.N
        );
    }

    // Create an instance from a body (e.g., HTTP request body)
    static fromBody(body: any): cnt_products {
        return new cnt_products(
            body.code || "",
            body.description || "",
            body.hasBulks || YN.N,
            body.hasAttributes || YN.N
        );
    }

    // Example method to generate a product from an external object
    static fromEG(oEG: any): cnt_products {
        return new cnt_products(
            oEG.code || "",
            oEG.description || "",
            oEG.hasBulks || YN.N,
            oEG.hasAttributes || YN.N
        );
    }
}
