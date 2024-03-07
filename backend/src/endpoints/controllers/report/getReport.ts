import { Request, Response } from "express";
import { getReportContent } from "../../../database/report/Get/getReportContent";
export async function getReport(req: Request, res: Response): Promise<any>{
    
    try{

        const type = req.body.type

        let content = await getReportContent(type)

        return res.status(200).send(content)

    }catch(error){
        throw error
    }
}