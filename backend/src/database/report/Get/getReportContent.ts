import { error } from "console";

enum Types{
   "pdf" = 1,
   "word" = 2
}

interface IReportService{
    getReportContent(): string;
    compare(type: string) : boolean
}

class PDFReport implements IReportService{

    compare(type: string){
        return type === Types[1]
    }

    getReportContent(): string {
        return "pdf file"
    }

}

class WordReport implements IReportService{

    compare(type: string){
        return type === Types[2]
    }

    getReportContent(): string {
        return "word file"
    }

}


// Creating a mapping of type strings to their corresponding classes.
const reportTypeMap: Record<string, new () => IReportService> = {
    "pdf": PDFReport,
    "word": WordReport,
};

// Helper function to get the enum key by value
function getTypeKeyByValue(value: string): Types | undefined {
    const entries = Object.entries(Types).filter(([key, val]) => typeof val === "number");
    console.log("the entries are", entries)
    for (const [key, val] of entries) {
        if (key.toLowerCase() === value.toLowerCase()) {
            return Types[key as keyof typeof Types];
        }
    }

    return undefined;
}

export async function getReportContent(type: string): Promise<{ content?: string, error?: string }> {
    try {
        const typeKey = getTypeKeyByValue(type);
        console.log("typekey is", typeKey)
        if (typeKey === undefined) {

            // throw new Error("Invalid report type");
            return {error: "Invalid report type"};

        }
        
        const reportClass = reportTypeMap[type.toLowerCase()];
        console.log("report type map", reportTypeMap[type.toLowerCase()])
        if (!reportClass) {
            return {error: "Invalid report type"};
        }
        const reportInstance = new reportClass();
        console.log("the report instance is", reportInstance)
        return {content: reportInstance.getReportContent()}
    } catch (error) {
        throw error;
    }
}

