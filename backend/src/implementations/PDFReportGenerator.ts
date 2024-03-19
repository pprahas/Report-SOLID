import { injectable } from "inversify";
import { IReportGenerator } from "../domain/IReportGenerator";
@injectable()
export class PDFReportGenerator implements IReportGenerator {
  // constructor() {}
  generate(): string {
    // return a Report type not string type
    return "pdf file";
  }
  constructor() {}
  type: string = "pdf";
}
