import { ReportResponse } from "../models/ReportResponse";
export interface IReportService {
  generateReport(value: string): ReportResponse;
}
