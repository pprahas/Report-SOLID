export interface IReportGenerator {
  type: string;
  generate(): string;
}
