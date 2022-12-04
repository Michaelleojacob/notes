## key points

- covers imports and using `type:module`
- imports for typescript and prisma setup
- how to use imports (middleware)
- exports

---

```js
// in package.json !! unless using ts !!
"type": "module",
```

---

## imports

```js
import { PrismaClient } from "@prisma/client";
import express from "express";
import path from "path";
import dotenv from "dotenv";
import { body, validationResult } from "express-validator";
import morgan from "morgan";
```

---

## middware

```js
dotenv.config();
const app = express();
app.use(morgan("short"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
```

---

## exports

```js
import { Application } from "express";
import landingRouter from "../routes/landingPage";

const routerConfig = (app: Application) => {
  app.use("/", landingRouter);
};

export default routerConfig;
```

```js
import express, { Application } from "express";
import morgan from "morgan";

const middlewareConfig = (app: Application) => {
  app.use(morgan("short"));

  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
};

export default middlewareConfig;
```
