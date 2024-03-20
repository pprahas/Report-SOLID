import { Container } from "inversify";
import { ReportService, IReportService } from "./Reports/ReportService";
export function registerDependecies(container: Container) {
  container.bind<IReportService>("ReportService").to(ReportService);
}
