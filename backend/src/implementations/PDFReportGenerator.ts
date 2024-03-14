import { injectable } from "inversify";
import { IReportGenerator } from "../domain/IReportGenerator";
@injectable()
export class PDFReportGenerator implements IReportGenerator {
  // constructor() {}
  generate(): string {
    return "pdf file";
  }
  constructor() {}
  type: string = "pdf";
}
