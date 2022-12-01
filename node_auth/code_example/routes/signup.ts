import express from "express";
import { body, validationResult } from "express-validator";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const signupRouter = express.Router();
const prisma = new PrismaClient();

signupRouter.get("/", (req, res) => {
  return res.json({ info: "this is the signup page" });
});

signupRouter.post(
  "/",
  body("username")
    .trim()
    .escape()
    .notEmpty()
    .withMessage("invalid username")
    .bail(),
  body("password")
    .trim()
    .escape()
    .notEmpty()
    .isLength({ min: 1 })
    .withMessage("invalid password")
    .bail(),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.json({ errors: errors.array({ onlyFirstError: true }) });
    }

    const isUserNameTaken = await prisma.user.findFirst({
      where: {
        username: req.body.username,
      },
    });
    console.log(isUserNameTaken);

    if (isUserNameTaken !== null) return res.json({ info: "username taken" });

    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    const password = bcrypt.hashSync(req.body.password, salt);
    await prisma.user.create({
      data: {
        username: req.body.username,
        password: password,
      },
    });
    return;
  }
);

export default signupRouter;
