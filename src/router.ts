import express from "express";
const router = express.Router();
import memberController from "./controllers/member.controller";

/**  Member **/
router
  .post("/member/signup", memberController.signup)
  .post("/member/login", memberController.login)
  .post("/member/logout", memberController.verifyAuth, memberController.logout)
  .get(
    "/member/detail",
    memberController.verifyAuth,
    memberController.getMemberDetail,
  );

/**  Product **/

/**  Order **/

export default router;
