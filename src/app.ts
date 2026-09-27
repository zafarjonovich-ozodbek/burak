import express from "express";
import path from "path";
import router from "./router";
import routerAdmin from "./routerAdmin";
import morgan from "morgan";
import { MORGAN_FORMAT } from "./libs/config";

/* 1-ENTERANCE(kirish) */
const app = express();
app.use(express.static(path.join(__dirname, "public"))); // Middleware Pattern   // "__dirname" bu "public file"ning manzilini korsatyapti
app.use(express.urlencoded({ extended: true })); // Middleware Pattern  //Rest API uchun xizmat(FRONTENDdan kelayotkan "json" malumotni BACKENDga kiritishga ruxsat)
app.use(express.json()); // Middleware Pattern  // Rest API uchun xizmat(FRONTENDdan kelayotkan "json" malumotni BACKENDga kiritishga ruxsat)
app.use(morgan(MORGAN_FORMAT)); // Middleware Pattern // Loyihamizga kelayotkan 'request'larni turlarini korsatib beradi

/* 2-SESSION */

/* 3-VIEWS */
app.set("views", path.join(__dirname, "views")); // backendda forntentni qurish(BSSR)
app.set("view engine", "ejs"); // "HTML" BACKENDda quriladi va bu "ejs" korinishidaligini aytyapmiz

/* 4-ROUTERS  */
app.use("/admin", routerAdmin); // admin uchun (BSSR: EJS)
app.use("/", router); // userlar uchun (SPA: REACT)ni tashkillayapmiz. // "/"ga kelgan 'request'larni "router file"ga jonatyapti

export default app; //ES Modules(ESM JS)da "app"ni export qlish
