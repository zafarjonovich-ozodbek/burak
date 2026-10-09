import path from "path";
import multer from "multer";
import { v4 } from "uuid";

/* MULTER IMAGE UPLOADER */
function getTargetImageStorage(address: any) {
  return multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, `./uploads/${address}`);
    },
    filename: function (req, file, cb) {
      console.log(file);
      const extension = path.parse(file.originalname).ext; // file'ni nomini
      const random_name = v4() + extension; // o'zgartirib yuklash uchun
      cb(null, random_name);
    },
  });
}

// makeUploader: function > create "multer obj"
const makeUploader = (address: string) => {
  const storage = getTargetImageStorage(address);
  return multer({ storage: storage }); // qayerga file yuklab berishini korsatyapmiz(tepadagi storage)
};

export default makeUploader;
