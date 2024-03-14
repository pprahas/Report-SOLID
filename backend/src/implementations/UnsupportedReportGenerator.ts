import { injectable, inject } from "inversify";
import { IReportGenerator } from "../domain/IReportGenerator";
@injectable()
export class UnsupportedReportGenerator implements IReportGenerator {
  constructor() {}
  type: string = "unsupported";
  generate(): string {
    return "unsupported file";
  }
}
