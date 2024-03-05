const express = require("express");
const router = express.Router();
const loginRoutes = require("../../controllers/authentication/login");

class AuthenticationRoutes {
  constructor() {
    this.router = router();
    this.initializeRoutes();
  }

  initializeRoutes() {
    this.router.post("/login", loginRoutes);
  }
}

module.exports = AuthenticationRoutes;
