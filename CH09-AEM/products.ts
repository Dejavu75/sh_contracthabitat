export enum YN { 
    y = "y",
    n = "n",
}

export type sch_product = {
    code: string;
    description: string;
    hasPackage: YN;
    hasAttribute: YN;
    pack: string; // Single package identifier
    attribute: string; // Single attribute identifier
    scancode: string; // Single barcode or scan code identifier
};

export class cnt_product implements sch_product {
    code: string = "";
    description: string = "";
    hasPackage: YN = YN.n; // Default value for YN type
    hasAttribute: YN = YN.n;
    pack: string = ""; // Default empty string
    attribute: string = ""; // Default empty string
    scancode: string; // Default empty string
    // Constructor with default values
    constructor(
        code: string = "",
        description: string = "",
        hasPackage: YN = YN.n,
        hasAttribute: YN = YN.n,
        pack: string = "",
        attribute: string = "",
        scancode: string = ""
    ) {
        this.code = code;
        this.description = description;
        this.hasPackage = hasPackage;
        this.hasAttribute = hasAttribute;
        this.pack = pack;
        this.attribute = attribute;
        this.scancode = scancode;
    }

    // Create instances from an array of results
    static fromResults(oRows: any): cnt_product[] {
        let result: cnt_product[] = [];
        for (let i = 0; i < oRows.length; i++) {
            result.push(cnt_product.fromRow(oRows[i]));
        }
        return result;
    }

    // Create a single instance from a database row
    static fromRow(oRow: any): cnt_product {
        return new cnt_product(
            oRow.code || "",
            oRow.description || "",
            oRow.hasPackage || YN.n,
            oRow.hasAttribute || YN.n,
            oRow.pack || "",
            oRow.attribute || "",
            oRow.scancode || ""
        );
    }

    // Create an instance from a body (e.g., HTTP request body)
    static fromBody(body: any): cnt_product {
        return new cnt_product(
            body.code || "",
            body.description || "",
            body.hasPackage || YN.n,
            body.hasAttribute || YN.n,
            body.pack || "",
            body.attribute || "",
            body.scancode || ""
        );
    }

    // Example method to generate a product from an external object
    static fromEG(oEG: any): cnt_product {
        return new cnt_product(
            oEG.code || "",
            oEG.description || "",
            oEG.hasPackage || YN.n,
            oEG.hasAttribute || YN.n,
            oEG.pack || "",
            oEG.attribute || "",
            oEG.scancode || ""
        );
    }
    static fromJson(json: any): cnt_product {
        //console.log("Parsing cnt_product from JSON:", json);
        return new cnt_product(
            json.code || "",
            json.description || "",
            json.hasPackage === "y" ? YN.y : YN.n,
            json.hasAttribute === "y" ? YN.y : YN.n,
            json.pack || "",
            json.attribute || "",
            json.scancode || ""
        );
    }
}
