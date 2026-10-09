import mongoose, { Schema } from "mongoose"; // "Schema class"ni chaqirib oldik
import {
  ProductCollection,
  ProductSize,
  ProductStatus,
  ProductVolume,
} from "../libs/enums/product.enum";

const productSchema = new Schema(
  {
    productStatus: {
      type: String,
      enum: ProductStatus,
      default: ProductStatus.PAUSE,
    },

    productCollection: {
      type: String,
      enum: ProductCollection,
      required: true,
    },

    productName: {
      type: String,
      required: true,
    },

    productPrice: {
      type: Number,
      required: true,
    },

    productLeftCount: {
      type: Number,
      required: true,
    },

    productSize: {
      type: String,
      enum: ProductSize,
      default: ProductSize.NORMAL,
    },

    productVolume: {
      type: Number,
      enum: ProductVolume,
      default: ProductVolume.ONE,
    },

    productDesc: {
      type: String,
    },

    productImages: {
      type: [String],
      default: [],
    },

    productViews: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }, //updatedAt, createdAt
);

productSchema.index(
  { productName: 1, productSize: 1, productVolume: 1 }, // misol: COLANORMAL0.5
  { unique: true }, // "nickname"dagi 'unique' bilan farqi buyerda bitta maxsulot, birxil size bilan birmarta ishlatiladi
);

export default mongoose.model("Product", productSchema); // "memberSchema" bu 'object' edi, "MODEL"ga aylanktirib olish uchun
