import { injectable } from "inversify";
import { IReportGenerator } from "../../02_application/common/IReportGenerator";
import { Report } from "../../01_domain/Entities/Report";
@injectable()
export class WordReportGenerator implements IReportGenerator {
  constructor() {}
  type: string = "word";
  generate(): Report {
    return new Report(2, "word file");
  }
}
