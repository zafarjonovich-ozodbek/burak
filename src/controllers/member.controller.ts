import { Request, Response } from "express";
import { T } from "../libs/types/common";
import MemberService from "../models/Member.service";
import { LoginInput, MemberInput } from "../libs/types/member";
import Errors from "../libs/Errors";
import AuthService from "../models/Auth.service";

const memberService = new MemberService();
const authService = new AuthService();

// REACT
const memberController: T = {};

memberController.signup = async (req: Request, res: Response) => {
  try {
    const input: MemberInput = req.body,
      result = await memberService.signup(input);
    const token = await authService.createToken(result);
    console.log("TOKEN:", token);

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
      result = await memberService.login(input),
      token = await authService.createToken(result); //TOKEN AUTHENTICATION
    console.log("token => :", token);

    res.json({ member: result }); // va qaytkan malumotni jonatyapmiz
  } catch (err) {
    console.log("Error, login:", err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standart.code).json(Errors.standart);
  }
};

export default memberController;
