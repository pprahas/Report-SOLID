export class Report {
  content: string;
  id: number;

  constructor(id: number, content: string) {
    this.content = content;
    this.id = id;
  }
}
