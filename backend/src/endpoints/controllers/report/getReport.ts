import { Request, Response } from "express";
import { ReportService } from "../../../database/report/Get/getReportContent";
import { ReportGeneratorFactory } from "../../../domain/IReportGeneratorFactory";
export async function getReport(req: Request, res: Response): Promise<any> {
  try {
    const type = req.query.type as string;

    if (!type) {
      return res
        .status(400)
        .send("Report type is required as a query parameter.");
    }

    // let reportService = new ReportService();

    var reportFactory = new ReportGeneratorFactory();

    let reportGenerator = reportFactory.create(type);

    let report = reportGenerator.reportGenerate();

    // let result = reportService.exportReport(type);

    return res.status(200).send(report);
    // return res.status(result.code).send(result.content || result.error);
  } catch (error) {
    throw error;
  }
}
