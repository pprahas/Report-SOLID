import { Container } from "inversify";
// import { TYPES } from "./src/domain/types";
import {
  IReportGenerator,
  PDFReportGenerator,
  UnsupportedReportGenerator,
  WordReportGenerator,
} from "./src/domain/IReportGenerator";

import {
  IReportGeneratorFactory,
  ReportGeneratorFactory,
} from "./src/domain/IReportGeneratorFactory";

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

export { myContainer };
