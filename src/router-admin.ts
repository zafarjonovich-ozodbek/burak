import express from "express";
const routerAdmin = express.Router();
import restaurantController from "./controllers/restaurant.controller";

/** Restaurant */
routerAdmin.get("/", restaurantController.goHome); // "ROUTER"lar aslida yo'nalishni korsatadi, "/"ga 'req' kelsa, "memberController"ning "goHome" methodga yo'naltiryapti

routerAdmin
  .get("/login", restaurantController.getLogin) // "/login"ga 'req' kelsa, "memberController"ning "getLogin" methodga yo'naltiryapti
  .post("/login", restaurantController.processLogin);

routerAdmin
  .get("/signup", restaurantController.getSignup) // "/signup"ga 'req' kelsa, "memberController"ning "getSignup" methodga yo'naltiryapti
  .post("/signup", restaurantController.processSignup);

/** Product */
/** User */

export default routerAdmin;
