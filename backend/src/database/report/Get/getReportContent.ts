enum Types{
   one = "pdf",
   two = "word"
}

export async function getReportContent(type: string): Promise<any> {
    try{

        switch(type){
            case Types.one:
                return new PDFReport();
            case Types.two:
                return new WordReport();
        }


    }catch(error){
        throw error
    }
}

interface IReportService{
    getReportContent(): string;
    compare(type: string) : boolean
}

class PDFReport implements IReportService{

    compare(type: string){
        return type === Types.one
    }

    getReportContent(): string {
        return "pdf file"
    }

}

class WordReport implements IReportService{

    compare(type: string){
        return type === Types.two
    }

    getReportContent(): string {
        return "word file"
    }

}