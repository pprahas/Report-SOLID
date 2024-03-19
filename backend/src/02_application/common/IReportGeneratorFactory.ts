import { IReportGenerator } from "./IReportGenerator";

export interface IReportGeneratorFactory {
  create(value: string): IReportGenerator;
}
