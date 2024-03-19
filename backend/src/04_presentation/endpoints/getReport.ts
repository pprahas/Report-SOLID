import { Request, Response } from "express";
import { IReportService } from "../../../02_application/Interfaces/IReportService";
import { myContainer } from "../../../../inversify.config";
export async function getReport(req: Request, res: Response): Promise<any> {
  const type = req.query.type as string;

  const reportService = myContainer.get<IReportService>("ReportService");

  let report = reportService.generateReport(type);

  return res.status(report.responseCode).send(report.content);
}
