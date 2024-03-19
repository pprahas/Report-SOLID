import { IReportGeneratorFactory } from "../common/IReportGeneratorFactory";
import { inject, injectable } from "inversify";
import { ReportResponse } from "../../models/ReportResponse";

export interface IReportService {
  generateReport(value: string): ReportResponse;
}
@injectable()
// check for unsupported type here
export class ReportService implements IReportService {
  reportFactory: IReportGeneratorFactory;

  constructor(
    @inject("ReportGeneratorFactory") reportFactory: IReportGeneratorFactory
  ) {
    this.reportFactory = reportFactory;
  }

  generateReport(value: string): ReportResponse {
    var report = this.reportFactory.create(value);

    //move to controller
    if (report.type == "unsupported") {
      return new ReportResponse(404, report.generate());
    }
    return new ReportResponse(200, report.generate());
  }
}
