import mongoose, { Schema } from "mongoose"; // "Schema class"ni chaqirib oldik
import { MemberStatus, MemberType } from "../libs/enums/member.enum";

// 1) Schema first & 2) Code first - "Schema" qurishning 2ta yo'li bor, biz "1"ni ishlatamiz
const memberSchema = new Schema( // "Schema" class --> "memberSchema" object qaytaryapti
  {
    memberType: {
      type: String,
      enum: MemberType, // "enum" faqat 'memberType'dagi qiymatlarni oladi
      default: MemberType.USER,
    },

    memberStatus: {
      type: String,
      enum: MemberStatus, // "enum" faqat 'memberStatus'dagi qiymatlarni oladi
      default: MemberStatus.ACTIVE,
    },

    memberNick: {
      type: String,
      index: { unique: true, sparse: true }, // faqatgina 1ta 'user'ga tegishli malumotlar uchun (phoneNumber, nick..)
      required: true, // kiritilishi majbur bo'lgan malumot
    },

    memberPhone: {
      type: String,
      index: { unique: true, sparse: true }, // faqatgina 1ta 'user'ga tegishli malumotlar uchun (phoneNumber, nick..)
      required: true, // kiritilishi majbur bo'lgan malumot
    },

    memberPassword: {
      type: String,
      select: false, // sirli malumotligi sabab "database" olib bermasligi uchun
      required: true, // kiritilishi majbur bo'lgan malumot
    },

    memberImage: {
      type: String,
    },

    memberPoints: {
      type: Number,
      default: 0,
    },

    memberAddress: {
      type: String,
    },

    memberDesc: {
      type: String,
    },
  },
  { timestamps: true }, // "createdAt, updatedAt"larni qo'yib beradi
);

export default mongoose.model("Member", memberSchema); // "memberSchema" bu 'object' edi, "MODEL"ga aylanktirib olish uchun
