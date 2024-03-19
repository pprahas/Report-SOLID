import { Container } from "inversify";
import { PDFReportGenerator } from "./03_infrastructure/generators/PDFReportGenerator";
import { WordReportGenerator } from "./03_infrastructure/generators/WordReportGenerator";
import { UnsupportedReportGenerator } from "./03_infrastructure/generators/UnsupportedReportGenerator";

import {
  IReportGenerator,
  IReportGeneratorFactory,
  IReportService,
} from "./domain/index";
import { ReportGeneratorFactory } from "./03_infrastructure/ReportGeneratorFactory";
import { ReportService } from "./02_application/Reports/ReportService";

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

myContainer.bind<IReportService>("ReportService").to(ReportService);

export { myContainer };
