import { injectable, multiInject } from "inversify";
import { IReportGeneratorFactory } from "../02_application/common/IReportGeneratorFactory";
import { IReportGenerator } from "../02_application/common/IReportGenerator";

@injectable()
export class ReportGeneratorFactory implements IReportGeneratorFactory {
  generatorMap: Map<string, IReportGenerator> = new Map<
    string,
    IReportGenerator
  >();

  constructor(@multiInject("ReportGenerator") generators: IReportGenerator[]) {
    generators.forEach((generator) => {
      this.generatorMap.set(generator.type, generator);
    });
  }

  create(type: string): IReportGenerator {
    const generator = this.generatorMap.get(type);
    if (!generator) {
      throw new Error(`No report generator found for type: ${type}`);
    }
    return generator;
  }
}
