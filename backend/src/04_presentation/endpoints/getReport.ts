import { Request, Response } from "express";
import { IReportService } from "../../02_application/Reports/ReportService";
import { myContainer } from "../../inversify.config";
export async function getReport(req: Request, res: Response): Promise<any> {
  const type = req.query.type as string;

  const reportService = myContainer.get<IReportService>("ReportService");

  let report = reportService.generateReport(type);

  return res.json(report).status(200);
}
