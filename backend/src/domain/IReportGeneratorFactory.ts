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
  //TODO
  // reportTypeMap: Record<Types, new () => IReportGenerator>;
  create(value: string): IReportGenerator;
}

export class ReportGeneratorFactory implements IReportGeneratorFactory {
  //TODO - put nothing in the constructor
  constructor() {}

  reportTypeMap: Record<Types, IReportGenerator> = {
    [Types.pdf]: new PDFReportGenerator(),
    [Types.word]: new WordReportGenerator(),
  };

  create(type: string): IReportGenerator {
    const typeEnum = Types[type as keyof typeof Types];
    return this.reportTypeMap[typeEnum];
    console.log(typeEnum);

    // if (!typeEnum) {
    //   return { error: "Invalid report type", code: 400 };
    // }

    // const ReportClass = this.reportTypeMap[typeEnum];
    // console.log(ReportClass);
    // if (!ReportClass) {
    //   return { error: "Report type not supported", code: 400 };
    // }

    // const reportInstance = new ReportClass();
    // return { content: reportInstance.reportGenerate(), code: 200 };
  }
}
