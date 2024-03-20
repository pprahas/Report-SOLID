import { Report } from "../../01_domain/Entities/Report";

export interface IReportGenerator {
  // method to check if the report can be generated
  // violating single resposibility (SRP)
  // remove type and move type into Report
  type: string;
  generate(): Report;
}
