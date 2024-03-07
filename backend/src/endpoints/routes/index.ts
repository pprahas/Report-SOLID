import { Application } from "express";
import reportRoutes from "./report/report"

export default class Routes{
    constructor(app: Application){
        app.use("/report", reportRoutes)
    }
}