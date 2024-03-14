import { Request, Response } from "express";
import { ReportGeneratorFactory } from "../../../domain/IReportGeneratorFactory";
export async function getReport(req: Request, res: Response): Promise<any> {
  try {
    const type = req.query.type as string;

    if (!type) {
      return res
        .status(400)
        .send("Report type is required as a query parameter.");
    }

    let reportFactory = new ReportGeneratorFactory();

    let reportGenerator = reportFactory.create(type);

    let report = reportGenerator.reportGenerate();

    return res.status(200).send(report);
  } catch (error) {
    throw error;
  }
}
