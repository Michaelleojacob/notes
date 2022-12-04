## key points

- separate server and app
- separate app and middleware
- custom middleware

---

## separate server and app

### app

app.ts

```js
import express from "express";
import middlewareConfig from "./config/middleware";
import routerConfig from "./config/router";

const app = express();

middlewareConfig(app);
routerConfig(app);

export default app;
```

### server

server.ts

```js
import app from "./app";

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
```

---

## separate middleware and app

config/middleware.ts or config/index.ts

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
