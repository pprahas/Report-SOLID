import { inject, injectable, named } from "inversify";
import { IReportGeneratorFactory } from "../02_application/common/IReportGeneratorFactory";
import { IReportGenerator } from "../02_application/common/IReportGenerator";
@injectable()
export class ReportGeneratorFactory implements IReportGeneratorFactory {
  map = new Map();

  generatorMap: Map<String, IReportGenerator> = new Map<
    String,
    IReportGenerator
  >();

  unsupportedGenerator: IReportGenerator;

  // try to inject a collection of ReportGenerator (if supported)
  // violation of OCP
  constructor(
    @inject("ReportGenerator") @named("pdf") pdfgenerator: IReportGenerator,
    @inject("ReportGenerator")
    @named("word")
    wordgenerator: IReportGenerator,
    @inject("ReportGenerator")
    @named("none")
    unsupportedgenerator: IReportGenerator
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
