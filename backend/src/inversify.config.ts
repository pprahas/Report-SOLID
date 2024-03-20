import { Container } from "inversify";
import { PDFReportGenerator } from "./03_infrastructure/generators/PDFReportGenerator";
import { WordReportGenerator } from "./03_infrastructure/generators/WordReportGenerator";
import { UnsupportedReportGenerator } from "./03_infrastructure/generators/UnsupportedReportGenerator";
import { IReportGenerator } from "./02_application/common/IReportGenerator";
import { IReportGeneratorFactory } from "./02_application/common/IReportGeneratorFactory";
import { IReportService } from "./02_application/Reports/ReportService";
import { ReportGeneratorFactory } from "./03_infrastructure/ReportGeneratorFactory";
import { ReportService } from "./02_application/Reports/ReportService";
import { registerDependecies as appDependecy } from "./02_application/application.inversify.config";

const myContainer = new Container();
myContainer
  .bind<IReportGenerator>("ReportGenerator")
  .to(PDFReportGenerator)
  .whenTargetNamed("pdf");
myContainer
  .bind<IReportGenerator>("ReportGenerator")
  .to(WordReportGenerator)
  .whenTargetNamed("word");
myContainer
  .bind<IReportGenerator>("ReportGenerator")
  .to(UnsupportedReportGenerator)
  .whenTargetNamed("none");

myContainer
  .bind<IReportGeneratorFactory>("ReportGeneratorFactory")
  .to(ReportGeneratorFactory);

appDependecy(myContainer);

export { myContainer };
