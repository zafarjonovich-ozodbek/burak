import { ObjectId } from "mongoose";
import { MemberStatus, MemberType } from "../enums/member.enum";
import { Session } from "express-session";
import { Request } from "express";

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

export interface AdminRequest extends Request {
  member: Member;
  session: Session & { member: Member };
}
