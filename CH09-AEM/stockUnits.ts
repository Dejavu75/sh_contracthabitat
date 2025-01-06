export enum StockUnitType { 
    product = "product",
    pack = "pack",
    pallet = "pallet",
}

export type Sch_StockUnit = {
    code: number;
    package: string; // Changed from bulk to package
    attribute: string;
    batch: string;
    quantity: number;
    warehouse: string;
    type: StockUnitType;
    packageCode: number | null; // Package code, nullable
};

export class Cnt_StockUnit implements Sch_StockUnit {
    code: number;
    package: string;
    attribute: string;
    batch: string;
    quantity: number;
    warehouse: string;
    type: StockUnitType;
    packageCode: number | null;

    constructor(
        code: number = 0,
        packageParam: string = "", // Renamed parameter to avoid conflict
        attribute: string = "",
        batch: string = "",
        quantity: number = 0,
        warehouse: string = "",
        type: StockUnitType = StockUnitType.product,
        packageCode: number | null = null
    ) {
        this.code = code;
        this.package = packageParam;
        this.attribute = attribute;
        this.batch = batch;
        this.quantity = quantity;
        this.warehouse = warehouse;
        this.type = type;
        this.packageCode = packageCode;
    }

    // Create instances from an array of results
    static fromResults(oRows: any): Cnt_StockUnit[] {
        const results: Cnt_StockUnit[] = [];
        for (let i = 0; i < oRows.length; i++) {
            results.push(Cnt_StockUnit.fromRow(oRows[i]));
        }
        return results;
    }

    // Create a single instance from a database row
    static fromRow(oRow: any): Cnt_StockUnit {
        return new Cnt_StockUnit(
            oRow.code || 0,
            oRow.package || "",
            oRow.attribute || "",
            oRow.batch || "",
            oRow.quantity || 0,
            oRow.warehouse || "",
            oRow.type || StockUnitType.product,
            oRow.packageCode || null
        );
    }

    // Create an instance from a request body (e.g., HTTP request body)
    static fromBody(body: any): Cnt_StockUnit {
        return new Cnt_StockUnit(
            body.code || 0,
            body.package || "",
            body.attribute || "",
            body.batch || "",
            body.quantity || 0,
            body.warehouse || "",
            body.type || StockUnitType.product,
            body.packageCode || null
        );
    }
}
