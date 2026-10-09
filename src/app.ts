import express from "express";
import path from "path";
import router from "./router";
import routerAdmin from "./router-admin";
import morgan from "morgan";
import { MORGAN_FORMAT } from "./libs/config";

// TCP2
import session from "express-session";
import ConnectMongoDB from "connect-mongodb-session";
import { T } from "./libs/types/common";

const MongoDBStore = ConnectMongoDB(session); // "Function"dan "Class" yaratyapmiz
const store = new MongoDBStore({
  uri: String(process.env.MONGO_URL), // "session" qayerda va qanday nom bilan saqlanishi
  collection: "sessions",
});

/* 1-ENTERANCE(kirish) */
const app = express();
app.use(express.static(path.join(__dirname, "public"))); // Middleware Pattern   // "__dirname" bu "public file"ning manzilini korsatyapti
app.use(express.urlencoded({ extended: true })); // Middleware Pattern  //Traditional API uchun xizmat(FRONTENDdan kelayotkan malumotni BACKENDga kiritishga ruxsat)
app.use(express.json()); // Middleware Pattern  // Rest API uchun xizmat(FRONTENDdan kelayotkan "json" malumotni BACKENDga kiritishga ruxsat)
app.use(morgan(MORGAN_FORMAT)); // Middleware Pattern // 'request'larning 'logging' jarayoni

/* 2-SESSION (TAMG'A) */

// LOGIN: req.+session | OTHER REQ: req.session.+member
// COOKIE[SID] > DATABASE > req.session.member
app.use(
  session({
    secret: String(process.env.SESSION_SECRET),
    cookie: {
      maxAge: 1000 * 3600 * 3, // 3hr
    },
    store: store, // 'session' qayerda xosil bolishini kirityapmiz (12-qatordagi 'store')
    resave: true, // "session" vaqti xarkirganda 'update' bolishi uchun 'true'
    saveUninitialized: true, // "signup" bolmasdan foydalanayotkan 'user'lar uchun bosh 'cookie' yaratib beradi
  }),
);
app.use(function (req, res, next) {
  const sessionInstance = req.session as T;
  res.locals.member = sessionInstance.member;
  next();
});

/* 3-VIEWS */
app.set("views", path.join(__dirname, "views")); // backendda forntentni qurish(BSSR)
app.set("view engine", "ejs"); // "HTML" BACKENDda quriladi va bu "ejs" korinishidaligini aytyapmiz

/* 4-ROUTERS  */
app.use("/admin", routerAdmin); // admin uchun (BSSR: EJS)
app.use("/", router); // userlar uchun (SPA: REACT)ni tashkillayapmiz. // "/"ga kelgan 'request'larni "router file"ga jonatyapti

export default app; //ES Modules(ESM JS)da "app"ni export qlish
