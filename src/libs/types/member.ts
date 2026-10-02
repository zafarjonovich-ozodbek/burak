import { ObjectId } from "mongoose";
import { MemberStatus, MemberType } from "../enums/member.enum";

// "DATABASE"dan "BACKend"ga qaytayotgan malumot
export interface Member {
  // _id: ObjectId;
  memberType: MemberType;
  memberStatus: MemberStatus;
  memberNick: string;
  memberPhone: string;
  memberPassword?: string;
  memberImage?: string;
  memberAddress?: string;
  memberDesc?: string;
  memberPoints: number;
  createdAt: Date;
  updatedAt: Date;
}

// "BACKend"dan "DATABASE"ga kirayotgan malumot
export interface MemberInput {
  memberType?: MemberType;
  memberStatus?: MemberStatus;
  memberNick: string;
  memberPhone: string;
  memberPassword: string;
  memberImage?: string;
  memberAddress?: string;
  memberDesc?: string;
  memberPoints?: number;
}

// Admin Login bo'layotkanda soralayotkan malumot
export interface LoginInput {
  memberNick: string;
  memberPassword: string;
}
