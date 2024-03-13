import {ReportGeneratorFactory} from "../../../domain/IReportService"

export async function exportReport(type: string): Promise<{ content?: string, error?: string }> {
    try {

        const reportGeneratorFactor = new ReportGeneratorFactory(type);
        // reportGeneratorFactor.create();


        // const typeKey = reportGeneratorFactor.getTypeKeyByValue(type);
        // console.log("typekey is", typeKey)
        // if (typeKey === undefined) {

        //     // throw new Error("Invalid report type");
        //     return {error: "Invalid report type"};

        // }
        
        // const reportClass = reportGeneratorFactor.reportTypeMap[type.toLowerCase()];
        // console.log("report type map", reportTypeMap[type.toLowerCase()])
        // if (!reportClass) {
        //     return {error: "Invalid report type"};
        // }

        // const reportInstance = new reportClass();
        // console.log("the report instance is", reportInstance)
        return reportGeneratorFactor.create()
    } catch (error) {
        throw error;
    }
}