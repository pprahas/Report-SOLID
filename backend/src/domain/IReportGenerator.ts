export interface IReportGenerator {
  reportGenerate(): string;
}

export class PDFReportGenerator implements IReportGenerator {
  reportGenerate(): string {
    return "pdf file";
  }
}

export class WordReportGenerator implements IReportGenerator {
  reportGenerate(): string {
    return "word file";
  }
}
