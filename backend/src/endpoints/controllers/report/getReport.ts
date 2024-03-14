import { Request, Response } from "express";
import { IReportGeneratorFactory } from "../../../domain/IReportGeneratorFactory";
import { myContainer } from "../../../../inversify.config";
export async function getReport(req: Request, res: Response): Promise<any> {
  try {
    const type = req.query.type as string;

    if (!type) {
      return res
        .status(400)
        .send("Report type is required as a query parameter.");
    }

    const reportFactory = myContainer.get<IReportGeneratorFactory>(
      "ReportGeneratorFactory"
    );

    const reportGenerator = reportFactory.create(type);

    const report = reportGenerator?.generate();

    return res.status(200).send(report);
  } catch (error) {
    throw error;
  }
}
