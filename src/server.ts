import dotenv from "dotenv"; // "dotenv"ni export qilyapmiz
dotenv.config(); // "dotenv"ning "method"i
import mongoose from "mongoose"; // "mongoose"dan mongoose objectini yaratyapmiz
import app from "./app";

mongoose
  .connect(process.env.MONGO_URL as string, {}) // "mongoDB"ning linkini ".env"dan chaqiryapmiz "string"ligini takidlayapmiz
  .then((data) => {
    console.log("MongoDB connection succeed");
    const PORT = process.env.PORT ?? 3003; // PORTni qayerdan qabul qilishini aytyapmiz, agar PORT bolmasa 3003ni tanla deyapmiz
    app.listen(PORT, function () {
      console.log(`The server is running succeessfully on port: ${PORT}`);
    });
  })
  .catch((err) => console.log("ERROR on connection MongoDB:", err));
