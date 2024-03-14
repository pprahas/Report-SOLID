import { ReportGeneratorFactory } from "../../../domain/IReportGeneratorFactory";

export class ReportService {
  constructor() {}

  exportReport(type: string): {
    code: number;
    content?: string;
    error?: string;
  } {
    try {
      const reportGeneratorFactor = new ReportGeneratorFactory();

      return reportGeneratorFactor.create(type);
    } catch (error) {
      throw error;
    }
  }
}
