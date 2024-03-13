import { reportTypeMap, getTypeKeyByValue } from "../../../domain/IReportService";

export async function exportReport(type: string): Promise<{ content?: string, error?: string }> {
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
        return {content: reportInstance.reportGenerate()}
    } catch (error) {
        throw error;
    }
}