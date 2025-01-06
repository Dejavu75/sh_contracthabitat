import { sch_product } from "./products"; 

export enum stock_unit_status {
    active = "active",
    inactive = "inactive",
    damaged = "damaged",
    dismantled = "dismantled",
}

export type sch_package = {
    code: number;
    description: string;
    warehouse: string;
    status: stock_unit_status;
    creationDate: Date;
    dismantleDate: Date | null; // Can be null if not dismantled
    products: sch_product[];
    notes: string;
};

export class cnt_package implements sch_package {
    code: number;
    description: string;
    warehouse: string;
    status: stock_unit_status;
    creationDate: Date;
    dismantleDate: Date | null;
    products: sch_product[];
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

    // Create instances from a result array
    static fromResults(oRows: any): cnt_package[] {
        let result: cnt_package[] = [];
        for (let i = 0; i < oRows.length; i++) {
            result.push(cnt_package.fromRow(oRows[i]));
        }
        return result;
    }

    // Create an instance from a database row
    static fromRow(oRow: any): cnt_package {
        return new cnt_package(
            oRow.code || 0,
            oRow.description || "",
            oRow.warehouse || "",
            oRow.status || stock_unit_status.active,
            oRow.creationDate ? new Date(oRow.creationDate) : new Date(),
            oRow.dismantleDate ? new Date(oRow.dismantleDate) : null,
            oRow.products || [],
            oRow.notes || ""
        );
    }

    // Create an instance from an HTTP request body
    static fromBody(body: any): cnt_package {
        return new cnt_package(
            body.code || 0,
            body.description || "",
            body.warehouse || "",
            body.status || stock_unit_status.active,
            body.creationDate ? new Date(body.creationDate) : new Date(),
            body.dismantleDate ? new Date(body.dismantleDate) : null,
            body.products || [],
            body.notes || ""
        );
    }
}
