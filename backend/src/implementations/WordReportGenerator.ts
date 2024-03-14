import { injectable } from "inversify";
import { IReportGenerator } from "../domain/IReportGenerator";
@injectable()
export class WordReportGenerator implements IReportGenerator {
  constructor() {}
  type: string = "word";
  generate(): string {
    return "word file";
  }
}
