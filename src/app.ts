import express from "express";
import path from "path";
import router from "./router";
import routerAdmin from "./router-admin";
import morgan from "morgan";
import { MORGAN_FORMAT } from "./libs/config";

/* 1-ENTERANCE(kirish) */
const app = express();
app.use(express.static(path.join(__dirname, "public"))); // Middleware Pattern   // "__dirname" bu "public file"ning manzilini korsatyapti
app.use(express.urlencoded({ extended: true })); // Middleware Pattern  //Traditional API uchun xizmat(FRONTENDdan kelayotkan malumotni BACKENDga kiritishga ruxsat)
app.use(express.json()); // Middleware Pattern  // Rest API uchun xizmat(FRONTENDdan kelayotkan "json" malumotni BACKENDga kiritishga ruxsat)
app.use(morgan(MORGAN_FORMAT)); // Middleware Pattern // 'request'larning 'logging' jarayoni

/* 2-SESSION - TAMG'A 2ta turi bor: AUTHENTICATION / AUTHORIZATION(maxsus qoshimcha xuquq)  */

/* 3-VIEWS */
app.set("views", path.join(__dirname, "views")); // backendda forntentni qurish(BSSR)
app.set("view engine", "ejs"); // "HTML" BACKENDda quriladi va bu "ejs" korinishidaligini aytyapmiz

/* 4-ROUTERS  */
app.use("/admin", routerAdmin); // admin uchun (BSSR: EJS)
app.use("/", router); // userlar uchun (SPA: REACT)ni tashkillayapmiz. // "/"ga kelgan 'request'larni "router file"ga jonatyapti

export default app; //ES Modules(ESM JS)da "app"ni export qlish
