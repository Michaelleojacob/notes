## key points

- minimalistic boilerplate example of auth using express with express validation.
  <br>
  <br>

## tech

- typescript
- express
- prisma
- bcrypt
- express validation

## files with examples:

- app.js (entry point)
- routes/
- validation/

app:

```ts
// app.ts
import { PrismaClient } from "@prisma/client";
import express from "express";
const port = process.env.PORT || 3003;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const prisma = new PrismaClient();

import signupRouter from "./routes/auth/signup";
import signinRouter from "./routes/auth/signin";
app.use("/signup", signupRouter);
app.use("/signin", signinRouter);

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
```

routes/signup:

```ts
// routes/signup.ts
import express from "express";
import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import validateSignUp from "../../validations/signup";

const signupRouter = express.Router();
const prisma = new PrismaClient();

signupRouter.get("/", (req: Request, res: Response) => {
  return res.json({ info: "this is the signup page" });
});

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

export default signupRouter;
```

validation/signup:

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
