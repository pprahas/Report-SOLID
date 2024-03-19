import { injectable, inject } from "inversify";
import { IReportGenerator } from "../../02_application/common/IReportGenerator";
@injectable()
export class UnsupportedReportGenerator implements IReportGenerator {
  constructor() {}
  type: string = "unsupported";
  generate(): string {
    return "unsupported file";
  }
}
