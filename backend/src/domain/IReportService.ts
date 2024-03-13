enum Types{
   "pdf" = 1,
   "word" = 2
}

interface IReportService{
    getReportContent(): string;
    compare(type: string) : boolean
}

class PDFReport implements IReportService{

    compare(type: string){
        return type === Types[1]
    }

    getReportContent(): string {
        return "pdf file"
    }

}

class WordReport implements IReportService{

    compare(type: string){
        return type === Types[2]
    }

    getReportContent(): string {
        return "word file"
    }

}

export const reportTypeMap: Record<string, new () => IReportService> = {
    [Types[1]]: PDFReport,
    [Types[2]]: WordReport,
};

export function getTypeKeyByValue(value: string): Types | undefined {
    const entries = Object.entries(Types).filter(([key, val]) => typeof val === "number");
    console.log("the entries are", entries)
    for (const [key, val] of entries) {
        if (key.toLowerCase() === value.toLowerCase()) {
            return Types[key as keyof typeof Types];
        }
    }

    return undefined;
}
