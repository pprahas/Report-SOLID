import { ReportGeneratorFactory } from "../../../domain/IReportService";

export class ReportService {
  private reportType: string;

  constructor(reportType: string) {
    this.reportType = reportType;
  }

  exportReport(): {
    code: number;
    content?: string;
    error?: string;
  } {
    try {
      const reportGeneratorFactor = new ReportGeneratorFactory(this.reportType);

      return reportGeneratorFactor.create();
    } catch (error) {
      throw error;
    }
  }
}
