import {
  IReportGenerator,
  WordReportGenerator,
  PDFReportGenerator,
} from "./IReportGenerator";
enum Types {
  "pdf" = 1,
  "word" = 2,
}

interface IReportGeneratorFactory {
  create(value: string): IReportGenerator;
}

export class ReportGeneratorFactory implements IReportGeneratorFactory {
  constructor() {}

  reportTypeMap: Record<Types, IReportGenerator> = {
    [Types.pdf]: new PDFReportGenerator(),
    [Types.word]: new WordReportGenerator(),
  };

  create(type: string): IReportGenerator {
    const typeEnum = Types[type as keyof typeof Types];
    return this.reportTypeMap[typeEnum];
  }
}
