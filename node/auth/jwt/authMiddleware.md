## key points

- express middleware
- authorize a user hitting an end point

## tech

- jwt
- node
- express
- typescript
- custom express.Request item

```ts
import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

declare global {
  namespace Express {
    interface Request {
      token?: any;
    }
  }
}

const authToken = (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.get("token");

    if (!token) {
      throw new Error();
    }

    const decoded = jwt.verify(token, process.env.SECRET!);
    req.token = decoded;

    next();
  } catch (err) {
    return res.status(401).json({ info: "invalid token from authToken" });
  }
};

export default authToken;
```

---

## custom request

- this does not work

```ts
// export interface CustomRequest extends Request {
//   token: string | JwtPayload;
// }
```

- use this:

```ts
declare global {
  namespace Express {
    interface Request {
      token?: any;
    }
  }
}
```

- couldn't figure out types, stuck with :any

```ts
// declare global {
// namespace Express {
// interface Request {
// token?:
//   | { data: { name: string; id: number }; iat: number; exp: number }
//   | JwtPayload;
//     }
//   }
// }
```
