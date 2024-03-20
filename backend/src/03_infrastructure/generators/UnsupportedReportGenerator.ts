import { injectable, inject } from "inversify";
import { IReportGenerator } from "../../02_application/common/IReportGenerator";
import { Report } from "../../01_domain/Entities/Report";
@injectable()
export class UnsupportedReportGenerator implements IReportGenerator {
  constructor() {}
  type: string = "unsupported";
  generate(): Report {
    return new Report(3, "unsupported");
  }
}
