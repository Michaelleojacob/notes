## key points

- app (entry point) boilerplate
- typescript
- ejs
- prisma

---

```js
import { PrismaClient } from "@prisma/client";
import express from "express";
import path from "path";
import dotenv from "dotenv";
import { body, validationResult } from "express-validator";

const port = process.env.PORT || 3001;

dotenv.config();
const prisma = new PrismaClient();
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.json());
app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));

app.get("/", async (req: express.Request, res: express.Response) => {
  const users = await prisma.user.findMany();
  console.log(users);
  res.render("signup", {
    users,
  });
});

app.post("/", async (req: express.Request, res: express.Response) => {
  const { username, password } = req.body;
  console.log(username, password);
  console.log("signup successful");
  const result = await prisma.user.create({
    data: {
      username,
      password,
    },
  });
  console.log(result);
  const users = await prisma.user.findMany();
  return res.render("signup", {
    users,
  });
});

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
```
