import { Request, Response } from "express";
import { ReportService } from "../../../database/report/Get/getReportContent";
export async function getReport(req: Request, res: Response): Promise<any> {
  try {
    const type = req.query.type as string;

    if (!type) {
      return res
        .status(400)
        .send("Report type is required as a query parameter.");
    }

    let reportService = new ReportService(type);

    let result = reportService.exportReport();

    return res.status(result.code).send(result.content || result.error);
  } catch (error) {
    throw error;
  }
}
