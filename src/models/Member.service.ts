// import Errors, { HttpCode, Message } from "../libs/errors";
import { MemberType } from "../libs/enums/member.enum";
import Errors, { HttpCode, Message } from "../libs/Errors";
import { LoginInput, Member, MemberInput } from "../libs/types/member";
import MemberModel from "../schema/Member.model";
import * as bcrypt from "bcryptjs";

class MemberService {
  private readonly memberModel; // 'SCHEMA"ni 'call' qilib variablega tengladik

  constructor() {
    this.memberModel = MemberModel;
  }

  /** SPA - User */
  public async signup(input: MemberInput): Promise<Member> {
    const salt = await bcrypt.genSalt();
    input.memberPassword = await bcrypt.hash(input.memberPassword, salt);

    try {
      const result = await this.memberModel.create(input);
      result.memberPassword = "";
      return result.toJSON() as Member;
    } catch (err) {
      console.error("Error, model:signup", err);
      throw new Errors(HttpCode.BAD_REQUEST, Message.USED_NICK_PHONE);
    }
  }

  public async login(input: LoginInput): Promise<Member> {
    // TODO: Consider member status later!!!
    const member = await this.memberModel
      .findOne(
        { memberNick: input.memberNick }, //"schema"dan biz kiritgan 'input malumot'ga teng malumotni 'database'dan olib berishini talab qilyapmiz
        { memberNick: 1, memberPassword: 1 }, // 'terminal'ga  "password" kelmaydi, shu sabab togrimi yoqmi tekshirish uchun majburan chaqiryapmiz, "1"-bu 'database'dan olib berishni bildiradi
      )
      .exec();
    if (!member) throw new Errors(HttpCode.NOT_FOUND, Message.NO_MEMBER_NICK);

    // login 'password' bilan 'database'dagi 'hash password'ni compare
    const isMatch = await bcrypt.compare(
      input.memberPassword,
      member.memberPassword,
    );

    if (!isMatch) {
      throw new Errors(HttpCode.UNAUTHORIZED, Message.WRONG_PASSWORD);
    }

    const result = await this.memberModel.findById(member._id).lean().exec(); // 'findById' - static method
    return result as Member; /** shuyerini ozim qoshtim, error beryotkandi */
  }

  /** BSSR - Adminka */
  public async processSignup(input: MemberInput): Promise<Member> {
    const exist = await this.memberModel // "exist" - agar 1ta "RES" bolsa va yana boshqa "RES" kiritsak, 1-"RES" haqida malumot qaytaradi
      .findOne({ memberType: MemberType.RESTAURANT })
      .exec();
    if (exist)
      throw new Errors(HttpCode.BAD_REQUEST, Message.SOMETHING_WENT_WRONG); // agar "exist(2ta RES)" bolsa shu "error" ishga tushadi

    const salt = await bcrypt.genSalt(); // "user" 'signup'bolganda uning "password" hash bolib qaytishi uchun
    input.memberPassword = await bcrypt.hash(input.memberPassword, salt); // va qaysi 'input' malumot nima orqali (solt) 'hash' bolishini kirityapmiz

    // 'Schema Model'dan kelayotgan qandaydir 'error'ni emas,
    // ozimiz yaratib olgan "ERROR HANDLING"ni qaytarishni kiritdik
    try {
      const result = await this.memberModel.create(input);
      result.memberPassword = "";
      return result as Member;
    } catch (err) {
      throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED);
    }
  }

  public async processLogin(input: LoginInput): Promise<Member> {
    console.log(3);
    const member = await this.memberModel // "Schema model"ni tenglab chaqiryapmiz
      .findOne(
        { memberNick: input.memberNick }, //"schema"dan biz kiritgan 'input malumot'ga teng malumotni 'database'dan olib berishini talab qilyapmiz
        { memberNick: 1, memberPassword: 1 }, // 'terminal'ga  "password" kelmaydi, shu sabab togrimi yoqmi tekshirish uchun majburan chaqiryapmiz, "1"-bu 'database'dan olib berishni bildiradi
      )
      .exec();
    // agar bunday malumotli 'member' bolmasa shu 'error'ni qaytaradi
    if (!member) throw new Errors(HttpCode.NOT_FOUND, Message.NO_MEMBER_NICK);

    console.log(4);
    // biz kiritgan 'password' bilan 'database'dagi 'hash password'ni solishtiryapmiz
    const isMatch = await bcrypt.compare(
      input.memberPassword,
      member.memberPassword,
    );

    if (!isMatch) {
      throw new Errors(HttpCode.UNAUTHORIZED, Message.WRONG_PASSWORD);
    }

    console.log(5);
    const result = await this.memberModel.findById(member._id).exec(); // 'findById' - static method
    return result as Member; /** shuyerini ozim qoshtim, error beryotkandi */
  }
}

export default MemberService;
function processLogin(input: any, LoginInput: any) {
  throw new Error("Function not implemented.");
}
