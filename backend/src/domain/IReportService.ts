enum Types {
  "pdf" = 1,
  "word" = 2,
}

interface IReportGenerator {
  reportGenerate(): string;
  compare(type: string): boolean;
}

class PDFReport implements IReportGenerator {
  compare(type: string) {
    return type === Types[1];
  }

  reportGenerate(): string {
    return "pdf file";
  }
}

class WordReport implements IReportGenerator {
  compare(type: string) {
    return type === Types[2];
  }

  reportGenerate(): string {
    return "word file";
  }
}

interface IReportGeneratorFactory {
  reportTypeMap: Record<string, new () => IReportGenerator>;
  getTypeKeyByValue(value: string): Types | undefined;
  create(): { content?: string; error?: string; code: number };
}

export class ReportGeneratorFactory implements IReportGeneratorFactory {
  private reportType: string;

  constructor(reportType: string) {
    this.reportType = reportType;
  }

  reportTypeMap: Record<string, new () => IReportGenerator> = {
    [Types[1]]: PDFReport,
    [Types[2]]: WordReport,
  };

  getTypeKeyByValue(value: string): Types | undefined {
    const entries = Object.entries(Types).filter(
      ([key, val]) => typeof val === "number"
    );
    console.log("the entries are", entries);
    for (const [key, val] of entries) {
      if (key.toLowerCase() === value.toLowerCase()) {
        return Types[key as keyof typeof Types];
      }
    }

    return undefined;
  }

  create(): { content?: string; error?: string; code: number } {
    const typeKey = this.getTypeKeyByValue(this.reportType);
    if (typeKey === undefined) {
      return { error: "Invalid report type", code: 400 };
    }

    const reportClass = this.reportTypeMap[this.reportType.toLowerCase()];

    if (!reportClass) {
      return { error: "Invalid report type", code: 400 };
    }

    const reportInstance = new reportClass();

    return { content: reportInstance.reportGenerate(), code: 200 };
  }
}
