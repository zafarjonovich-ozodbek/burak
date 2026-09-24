import express from "express";
import path from "path";

/* 1-ENTERANCE(kirish) */
const app = express();
app.use(express.static(path.join(__dirname, "public"))); //"__dirname" bu "public file"ning manzilini korsatyapti
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/* 2-SESSION) */

/* 3-VIEWS) */
app.set("views", path.join(__dirname, '"views'));
app.set("view engine", "ejs");

/* 4-ROUTERS ) */

export default app; //ES Modules(ESM JS)da "app"ni export qlish
