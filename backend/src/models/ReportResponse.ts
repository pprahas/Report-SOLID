export class ReportResponse {
  responseCode: number;
  content: string;

  constructor(responseCode: number, content: string) {
    this.responseCode = responseCode;
    this.content = content;
  }
}
