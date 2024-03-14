import { isNumberObject } from "util/types";

import { inject, injectable, named } from "inversify";
import {
  IReportGenerator,
  WordReportGenerator,
  PDFReportGenerator,
  UnsupportedReportGenerator,
} from "./IReportGenerator";
enum Types {
  "pdf" = 1,
  "word" = 2,
}

export interface IReportGeneratorFactory {
  create(value: string): IReportGenerator;
}

@injectable()
export class ReportGeneratorFactory implements IReportGeneratorFactory {
  map = new Map();

  generatorMap: Map<String, IReportGenerator> = new Map<
    String,
    IReportGenerator
  >();

  unsupportedGenerator: IReportGenerator;

  constructor(
    @inject("ReportGenerator") @named("pdf") pdfgenerator: PDFReportGenerator,
    @inject("ReportGenerator")
    @named("word")
    wordgenerator: WordReportGenerator,
    @inject("ReportGenerator")
    @named("none")
    unsupportedgenerator: UnsupportedReportGenerator
  ) {
    this.generatorMap.set("pdf", pdfgenerator);
    this.generatorMap.set("word", wordgenerator);
    this.unsupportedGenerator = unsupportedgenerator;
  }

  create(type: string): IReportGenerator {
    // const typeEnum = Types[type as keyof typeof Types];
    const generated = this.generatorMap.get(type);
    return generated ?? this.unsupportedGenerator;
  }
}
