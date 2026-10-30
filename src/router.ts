import express from "express";
const router = express.Router();
import memberController from "./controllers/member.controller";

/**  Member **/
router
  .post("/member/signup", memberController.signup)
  .post("/member/login", memberController.login)
  .get("/member/detail", memberController.verifyAuth);

/**  Product **/

/**  Order **/

export default router;
