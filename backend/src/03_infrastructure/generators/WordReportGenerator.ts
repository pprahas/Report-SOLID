import { injectable } from "inversify";
import { IReportGenerator } from "../../02_application/common/IReportGenerator";
@injectable()
export class WordReportGenerator implements IReportGenerator {
  constructor() {}
  type: string = "word";
  generate(): string {
    return "word file";
  }
}
