import { cnt_product, sch_product } from "./products";  

export enum stock_unit_status {
    active = "active",
    inactive = "inactive",
    damaged = "damaged",
    dismantled = "dismantled",
}

export type sch_pallet = {
    code: number;
    description: string;
    warehouse: string;
    status: stock_unit_status;
    creationDate: Date;
    dismantleDate: Date | null; // Can be null if not dismantled
    products: cnt_product[];
    notes: string;
};

export class cnt_pallet implements sch_pallet {
    code: number;
    description: string;
    warehouse: string;
    status: stock_unit_status;
    creationDate: Date;
    dismantleDate: Date | null;
    products: cnt_product[];
    notes: string;

    constructor(
        code: number = 0,
        description: string = "",
        warehouse: string = "",
        status: stock_unit_status = stock_unit_status.active,
        creationDate: Date = new Date(),
        dismantleDate: Date | null = null,
        products: sch_product[] = [],
        notes: string = ""
    ) {
        this.code = code;
        this.description = description;
        this.warehouse = warehouse;
        this.status = status;
        this.creationDate = creationDate;
        this.dismantleDate = dismantleDate;
        this.products = products;
        this.notes = notes;
    }
    static defaultPallet(): cnt_pallet {
        return new cnt_pallet(0, "", "", stock_unit_status.active, new Date(), null, [], "");
    }
    // Create instances from a result array
    static fromResults(oRows: any): cnt_pallet[] {
        let result: cnt_pallet[] = [];
        for (let i = 0; i < oRows.length; i++) {
            result.push(cnt_pallet.fromRow(oRows[i]));
        }
        return result;
    }

    // Create an instance from a database row
    static fromRow(oRow: any): cnt_pallet {
        return new cnt_pallet(
            oRow.code || 0,
            oRow.description || "",
            oRow.warehouse || "",
            oRow.status || stock_unit_status.active,
            oRow.creationDate ? new Date(oRow.creationDate) : new Date(),
            oRow.dismantleDate ? new Date(oRow.dismantleDate) : null,
            (oRow.products || []).map((product: any) => cnt_product.fromJson(product)),
            oRow.notes || ""
        );
    }

    // Create an instance from an HTTP request body
    static fromBody(body: any): cnt_pallet {
        return new cnt_pallet(
            body.code || 0,
            body.description || "",
            body.warehouse || "",
            body.status || stock_unit_status.active,
            body.creationDate ? new Date(body.creationDate) : new Date(),
            body.dismantleDate ? new Date(body.dismantleDate) : null,
            (body.products || []).map((product: any) => cnt_product.fromJson(product)),
            body.notes || ""
        );
    }
    static fromJson(json: any): cnt_pallet {
        
        console.log("Parsing cnt_pallet from JSON:", json);
        return new cnt_pallet(
            json.code || 0,
            json.description || "",
            json.warehouse || "",
            json.status || stock_unit_status.active,
            json.creationDate ? new Date(json.creationDate) : new Date(),
            json.dismantleDate ? new Date(json.dismantleDate) : null,
            (json.products || []).map((product: any) => cnt_product.fromJson(product)),
            json.notes || ""
        );
    }
}
