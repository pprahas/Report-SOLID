// class ReportService {
//     async function exportReport(type: string): Promise<any> {
//     try{

//         switch(type){
//             case Types[1]:
//                 return new PDFReport().getReportContent();
//             case Types[2]:
//                 return new WordReport().getReportContent();
//         }


//     }catch(error){
//         throw error
//     }
// }
// }

import { reportTypeMap, getTypeKeyByValue } from "../database/report/Get/getReportContent";

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
        return {content: reportInstance.getReportContent()}
    } catch (error) {
        throw error;
    }
}