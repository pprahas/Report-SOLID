import { Container } from "inversify";
import {
  PDFReportGenerator,
  WordReportGenerator,
  UnsupportedReportGenerator,
  ReportGeneratorFactory,
} from "./index";
import {
  IReportGenerator,
  IReportGeneratorFactory,
} from "../02_application/index";
export function registerDependecies(container: Container) {
  container
    .bind<IReportGenerator>("ReportGenerator")
    .to(PDFReportGenerator)
    .whenTargetNamed("pdf");
  container
    .bind<IReportGenerator>("ReportGenerator")
    .to(WordReportGenerator)
    .whenTargetNamed("word");
  container
    .bind<IReportGenerator>("ReportGenerator")
    .to(UnsupportedReportGenerator)
    .whenTargetNamed("none");

  container
    .bind<IReportGeneratorFactory>("ReportGeneratorFactory")
    .to(ReportGeneratorFactory);
}
