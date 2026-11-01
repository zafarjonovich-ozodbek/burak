import express from "express";
const router = express.Router();
import memberController from "./controllers/member.controller";
import uploader from "./libs/utils/uploader";

/**  Member **/
router
  .post("/member/signup", memberController.signup)
  .post("/member/login", memberController.login)
  .post("/member/logout", memberController.verifyAuth, memberController.logout)

  .get(
    "/member/detail",
    memberController.verifyAuth,
    memberController.getMemberDetail,
  )

  .post(
    "/member/update",
    memberController.verifyAuth,
    uploader("member").single("memberImage"),
    memberController.updateMember,
  );

/**  Product **/

/**  Order **/

export default router;
