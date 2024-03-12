import { getReportContent } from "../database/report/Get/getReportContent";

describe("getReportContent", () => {
    it('should return content for valid report type "pdf"', async () => {
        const result = await getReportContent('pdf');
        expect(result.content).toBe('pdf file');
    });

    it('should return content for valid report type "word"', async () => {
        const result = await getReportContent('word');
        expect(result.content).toBe('word file');
    });

    it('should return error for invalid report type', async () => {
        const result = await getReportContent('invalid');
        expect(result.error).toBe('Invalid report type');
    });
})