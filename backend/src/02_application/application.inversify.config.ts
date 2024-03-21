import { Container } from "inversify";
import { ReportService, IReportService } from "./index";
export function registerDependecies(container: Container) {
  container.bind<IReportService>("ReportService").to(ReportService);
}
