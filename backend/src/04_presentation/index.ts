import { Application } from "express";
import "reflect-metadata";
import reportRoutes from "./report";

export default class Routes {
  constructor(app: Application) {
    app.use("/report", reportRoutes);
  }
}
