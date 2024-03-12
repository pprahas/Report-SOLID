import { Request, Response } from "express";
import { getReportContent } from "../../../database/report/Get/getReportContent";
export async function getReport(req: Request, res: Response): Promise<any>{
    
    try{

        const type = req.query.type as string;

         if (!type) {
            return res.status(400).send("Report type is required as a query parameter.");
        }

        let result = await getReportContent(type)

        if(result.error){
            return res.status(400).send(result.error);

        }

        return res.status(200).send(result.content)

    }catch(error){
        throw error
    }
}