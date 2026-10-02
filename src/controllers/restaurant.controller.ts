import { Request, Response } from "express";
import { T } from "../libs/types/common";
import MemberService from "../models/Member.service";
import { LoginInput, MemberInput } from "../libs/types/member";
import { MemberType } from "../libs/enums/member.enum";

const memberService = new MemberService();

const restaurantController: T = {};
restaurantController.goHome = (req: Request, res: Response) => {
  try {
    console.log("goHome");
    res.render("home");
  } catch (err) {
    console.log("Error, goHome:", err);
  }
};

restaurantController.getSignup = (req: Request, res: Response) => {
  try {
    console.log("getSignup");
    res.render("signup");
  } catch (err) {
    console.log("Error, getSignup:", err);
  }
};

restaurantController.getLogin = (req: Request, res: Response) => {
  try {
    console.log("getLogin");
    res.render("login");
  } catch (err) {
    console.log("Error, getLogin:", err);
  }
};

restaurantController.processSignup = async (req: Request, res: Response) => {
  try {
    const newMember: MemberInput = req.body; // 'frontend'dan kirib kelayotkan malumotni "newMember"ga tenglab, uning 'memberType'sini kiritdik
    newMember.memberType = MemberType.RESTAURANT; // bu 'singup' "RESTAURANT"ga tegishli ekanligini korsatdik

    const result = await memberService.processSignup(newMember); // "Ser.model"ning 'method'ni chaqirdik

    // SESSION - TAMGA QURISH

    res.send(result);
  } catch (err) {
    console.log("Error, processSignup:", err);
    res.send(err);
  }
};

restaurantController.processLogin = async (req: Request, res: Response) => {
  try {
    console.log("process login");
    const input: LoginInput = req.body;

    const result = await memberService.processLogin(input); // Service Modeldan "Controller"ga qaytaryapmiz

    // SESSION - TAMGA QURISH

    res.json(result); // va qaytkan malumotni jonatyapmiz
  } catch (err) {
    console.log("Error, processLogin:", err);
    res.json(err);
  }
};

export default restaurantController;
