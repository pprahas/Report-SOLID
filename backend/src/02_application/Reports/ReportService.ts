import { IReportGeneratorFactory } from "../common/IReportGeneratorFactory";
import { inject, injectable } from "inversify";
import { Report } from "../../01_domain/Entities/Report";

export interface IReportService {
  generateReport(value: string): Report;
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

  generateReport(value: string): Report {
    var report = this.reportFactory.create(value);

    return report.generate();
  }
}
