import { Request, Response } from "express";
import { T } from "../libs/types/common";
import MemberService from "../models/Member.service";
import { LoginInput, MemberInput } from "../libs/types/member";
import Errors from "../libs/Errors";

const memberService = new MemberService();
// REACT

const memberController: T = {};

memberController.signup = async (req: Request, res: Response) => {
  try {
    const input: MemberInput = req.body,
      result = await memberService.signup(input);

    // TOKEN - TAMGA QURISH

    res.json({ member: result });
  } catch (err) {
    console.log("Error, signup:", err);

    // mantiq - agar 'err' biz 'Errors'da kiritgan 'err' bolsa osha 'err'ni
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standart.code).json(Errors.standart); // agar umuman boshqa 'err' bolsa 'Errors.standart'ni qaytarsin degani
    // res.json({});
  }
};

memberController.login = async (req: Request, res: Response) => {
  try {
    console.log("login");
    const input: LoginInput = req.body,
      result = await memberService.login(input); // Service Modeldan "Controller"ga qaytaryapmiz

    // TOKEN - TAMGA QURISH

    res.json({ member: result }); // va qaytkan malumotni jonatyapmiz
  } catch (err) {
    console.log("Error, login:", err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standart.code).json(Errors.standart);
  }
};

export default memberController;
