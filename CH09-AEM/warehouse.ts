// Define the type for Warehouse
export type Sch_Warehouse = {
    code: number;
    description: string;
};

// Define the class for Warehouse
export class Cnt_Warehouse implements Sch_Warehouse {
    code: number;
    description: string;

    constructor(
        code: number = 0,
        description: string = ""
    ) {
        this.code = code;
        this.description = description;
    }

    // Create instances from an array of results
    static fromResults(oRows: any): Cnt_Warehouse[] {
        const results: Cnt_Warehouse[] = [];
        for (let i = 0; i < oRows.length; i++) {
            results.push(Cnt_Warehouse.fromRow(oRows[i]));
        }
        return results;
    }

    // Create a single instance from a database row
    static fromRow(oRow: any): Cnt_Warehouse {
        return new Cnt_Warehouse(
            oRow.code || 0,
            oRow.description || ""
        );
    }

    // Create an instance from a request body (e.g., HTTP request body)
    static fromBody(body: any): Cnt_Warehouse {
        return new Cnt_Warehouse(
            body.code || 0,
            body.description || ""
        );
    }
}
