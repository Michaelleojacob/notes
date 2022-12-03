## key points

- on POST validate and sanitize body
- how to separate validation logic

source: https://stackoverflow.com/questions/55772477/how-to-implement-validation-in-a-separate-file-using-express-validator

```ts
// routes/signup.ts
import validateSignUp from "../../validations/signup";

signupRouter.post("/", validateSignUp, async (req: Request, res: Response) => {
  const saltRounds = 10;
  const salt = bcrypt.genSaltSync(saltRounds);
  const password = bcrypt.hashSync(req.body.password, salt);
  const user = await prisma.user.create({
    data: {
      username: req.body.username,
      password: password,
    },
  });
  return res.status(400).json({ info: `user ${user.username} created` });
});
```

```ts
// validation/signup.ts
import { check, validationResult } from "express-validator";
import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const validateSignUp = [
  check("username")
    .trim()
    .escape()
    .notEmpty()
    .withMessage("invalid username")
    .bail()
    .custom(async (val) => {
      const isNameTaken = await prisma.user.findFirst({
        where: {
          username: val,
        },
      });
      if (isNameTaken !== null)
        return Promise.reject("username already in use");
    })
    .bail(),
  check("password")
    .trim()
    .escape()
    .notEmpty()
    .isLength({ min: 1 })
    .withMessage("invalid password")
    .bail(),
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
        .status(422)
        .json({ errors: errors.array({ onlyFirstError: true }) });
    }
    next();
  },
];

export default validateSignUp;
```
