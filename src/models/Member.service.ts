// import Errors, { HttpCode, Message } from "../libs/errors";
import { MemberType } from "../libs/enums/member.enum";
import Errors, { HttpCode, Message } from "../libs/Errors";
import { LoginInput, Member, MemberInput } from "../libs/types/member";
import MemberModel from "../schema/Member.model";

class MemberService {
  // "Ser.model" doim 'class'

  // "Ser.model" ichida "SCHEMA model"ni 'call' qilyapmiz
  private readonly memberModel; // "Variable"ga tengladik

  constructor() {
    this.memberModel = MemberModel; // va o'sha 'variable'ni "SCHEMA model"ga tengladik
  }
  //"Controller"dan kirib kelayotgan 'newMember' malumotlarning "input"ni kiritdik "Ser.model" methodning 'parametr'uchun
  public async processSignup(input: MemberInput): Promise<Member> {
    const exist = await this.memberModel // "exist" - agar 1ta "RES" bolsa va yana boshqa "RES" kiritsak, 1-"RES" haqida malumot qaytaradi
      .findOne({ memberType: MemberType.RESTAURANT })
      .exec();
    if (exist) throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED); // agar "exist(2ta RES)" bolsa shu "error" ishga tushadi

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
    const member = await this.memberModel
      .findOne(
        { memberNick: input.memberNick },
        { memberNick: 1, memberPassword: 1 },
      )
      .exec();
    if (!member) throw new Errors(HttpCode.NOT_FOUND, Message.NO_MEMBER_NICK);

    const isMatch = input.memberPassword === member.memberPassword;
    if (!isMatch) {
      throw new Errors(HttpCode.UNAUTHORIZED, Message.WRONG_PASSWORD);
    }

    const result = await this.memberModel.findById(member._id).exec();
    return result as Member; /** shuyerini ozim qoshtim, error beryotkandi */
  }
}

export default MemberService;
