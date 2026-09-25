import express from "express";
const router = express.Router();
import memberController from "./controllers/member.controller";

router.get("/", memberController.goHome); // "ROUTER"lar aslida yo'nalishni korsatadi, "/"ga 'req' kelsa, "memberController"ning "goHome" methodga yo'naltiryapti

router.get("/login", memberController.getLogin); // "/login"ga 'req' kelsa, "memberController"ning "getLogin" methodga yo'naltiryapti

router.get("/signup", memberController.getSignup); // "/signup"ga 'req' kelsa, "memberController"ning "getSignup" methodga yo'naltiryapti

export default router;
