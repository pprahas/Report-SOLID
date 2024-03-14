// import "reflect-metadata";
import { injectable, inject } from "inversify";
export interface IReportGenerator {
  generate(): string;
}

@injectable()
export class PDFReportGenerator implements IReportGenerator {
  // constructor() {}
  generate(): string {
    return "pdf file";
  }
  constructor() {}
}

@injectable()
export class WordReportGenerator implements IReportGenerator {
  constructor() {}
  generate(): string {
    return "word file";
  }
}

@injectable()
export class UnsupportedReportGenerator implements IReportGenerator {
  constructor() {}
  generate(): string {
    return "unsupported file";
  }
}
