import { injectable } from "inversify";
import { IReportGenerator } from "../../02_application/common/IReportGenerator";
import { Report } from "../../01_domain/Entities/Report";
@injectable()
export class PDFReportGenerator implements IReportGenerator {
  constructor() {}
  generate(): Report {
    // return a Report type not string type
    return new Report(1, "pdf file");
  }
  type: string = "pdf";
}
