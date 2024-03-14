import { Request, Response } from "express";
import { IReportGeneratorFactory } from "../../../domain/IReportGeneratorFactory";
import { IReportService } from "../../../domain/IReportService";
import { myContainer } from "../../../inversify.config";
export async function getReport(req: Request, res: Response): Promise<any> {
  const type = req.query.type as string;

  const reportService = myContainer.get<IReportService>("ReportService");

  let response = reportService.generateReport(type);

  return res.status(response.responseCode).send(response.content);
}
