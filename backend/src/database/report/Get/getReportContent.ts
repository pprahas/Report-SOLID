enum Types{
   "pdf" = 1,
   "word" = 2
}

export async function getReportContent(type: string): Promise<any> {
    try{

        switch(type){
            case Types[1]:
                return new PDFReport().getReportContent();
            case Types[2]:
                return new WordReport().getReportContent();
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