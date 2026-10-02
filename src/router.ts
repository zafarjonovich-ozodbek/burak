import express from "express";
const router = express.Router();
import memberController from "./controllers/member.controller";

// REACT

router
  .post("/signup", memberController.signup)
  .post("/login", memberController.login);

export default router;
