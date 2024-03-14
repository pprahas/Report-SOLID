import { Container } from "inversify";
import { PDFReportGenerator } from "./implementations/PDFReportGenerator";
import { WordReportGenerator } from "./implementations/WordReportGenerator";
import { UnsupportedReportGenerator } from "./implementations/UnsupportedReportGenerator";

import {
  IReportGenerator,
  IReportGeneratorFactory,
  IReportService,
} from "./domain/index";
import { ReportGeneratorFactory } from "./implementations/ReportGeneratorFactory";
import { ReportService } from "./implementations/ReportService";

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
