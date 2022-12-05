## key points

- cors configuration
- two examples
- typescript example

---

```js
import { Request } from "express";
/**
 * Add a list of allowed origins.
 * If you have more origins you would like to add, you can add them to the array below.
 */
const allowedOrigins = ["http://localhost:3004"];

const corsOptions: cors.CorsOptions = {
  origin: allowedOrigins,
};
```

```js

export default corsOptions;

const allowlist = ["http://localhost:5003"];
const corsOptions = function (
  req: Request,
  callback: (n: null, corsOptions: { origin: boolean }) => void
) {
  let corsOptions = { origin: false };
  if (allowlist.indexOf(req.get("Origin")!) !== -1) {
    corsOptions = { origin: true }; // reflect (enable) the requested origin in the CORS response
  } else {
    corsOptions = { origin: false }; // disable CORS for this request
  }
  callback(null, corsOptions); // callback expects two parameters: error and options
};

export default corsOptions;
```
