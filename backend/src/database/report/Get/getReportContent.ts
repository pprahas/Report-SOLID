export async function getReportContent(type: string): Promise<any> {
    try{

        var content;

        // form.compare(type)

        if(type === "pdf"){
            let pdf = PDFReport
        }

        if(type === "word"){
            content = "word file"
        }

            return content

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
        return type === "pdf"
    }

    getReportContent(): string {
        return "pdf file"
    }

}
class WordReport implements IReportService{

    compare(type: string){
        return type === "word"
    }

    getReportContent(): string {
        return "word file"
    }

}