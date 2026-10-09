import { Types } from "mongoose";
import {
  ProductCollection,
  ProductSize,
  ProductStatus,
} from "../enums/product.enum";

// "DATABASE"dan qaytayotkan malumot
export interface Product {
  _id: Types.ObjectId;
  productStatus: ProductStatus;
  productCollection: ProductCollection;
  productName: string;
  productPrice: number;
  productLeftCount: number;
  productSize: ProductSize;
  productVolume: number;
  productDesc?: string;
  productImages: string[];
  productViews: number;
}

// "FRONTEND"da 'create' qilib kiritayotkan malumotlarimiz
export interface ProductInput {
  productStatus?: ProductStatus;
  productCollection?: ProductCollection;
  productName: string;
  productPrice: number;
  productLeftCount: number;
  productSize?: number;
  productVolume?: number;
  productDesc?: string;
  productImages?: string[];
  productViews?: number;
}

// "FRONTEND"da update qilayotgan product
export interface ProductUpdateInput {
  _id: Types.ObjectId;
  productStatus?: ProductStatus;
  productCollection?: ProductCollection;
  productName?: string;
  productPrice?: number;
  productLeftCount?: number;
  productSize?: number;
  productVolume?: number;
  productDesc?: string;
  productImages?: string[];
  productViews?: number;
}
