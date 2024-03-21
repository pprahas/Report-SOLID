import { Container } from "inversify";
import {
  PDFReportGenerator,
  WordReportGenerator,
  ReportGeneratorFactory,
} from "./index";
import {
  IReportGenerator,
  IReportGeneratorFactory,
} from "../02_application/index";
export function registerDependecies(container: Container) {
  container.bind<IReportGenerator>("ReportGenerator").to(PDFReportGenerator);
  container.bind<IReportGenerator>("ReportGenerator").to(WordReportGenerator);

  container
    .bind<IReportGeneratorFactory>("ReportGeneratorFactory")
    .to(ReportGeneratorFactory);
}
