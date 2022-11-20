```js
// in package.json !! unless using ts !!
"type": "module",
```

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
```
