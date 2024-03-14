import { IReportGeneratorFactory } from "../domain/IReportGeneratorFactory";
import { IReportService } from "../domain/IReportService";
import { inject, injectable, named } from "inversify";
import { ReportResponse } from "../models/ReportResponse";

@injectable()
export class ReportService implements IReportService {
  reportFactory: IReportGeneratorFactory;

  constructor(
    @inject("ReportGeneratorFactory") reportFactory: IReportGeneratorFactory
  ) {
    this.reportFactory = reportFactory;
  }

  generateReport(value: string): ReportResponse {
    var report = this.reportFactory.create(value);

    if (report.type == "unsupported") {
      return new ReportResponse(404, report.generate());
    }
    return new ReportResponse(200, report.generate());
  }
}
