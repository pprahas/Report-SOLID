export interface IReportGenerator {
  // method to check if the report can be generated
  // violating single resposibility (SRP)
  // remove type and move type into Report
  type: string;
  generate(): string;
}
