export interface IReportGenerator {
  reportGenerate(): string;
}

export class PDFReport implements IReportGenerator {
  reportGenerate(): string {
    return "pdf file";
  }
}

export class WordReport implements IReportGenerator {
  reportGenerate(): string {
    return "word file";
  }
}
