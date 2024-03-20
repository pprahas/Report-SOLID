import { Router } from "express";
import { getReport } from "./endpoints/getReport";

class ReportRoutes {
  router = Router();

  constructor() {
    this.initializeRoutes();
  }

  initializeRoutes() {
    this.router.get("/get", getReport);
  }
}

export default new ReportRoutes().router;
