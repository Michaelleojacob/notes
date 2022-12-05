## key points

- adding jwt to the express.Request type
- have to extend Request to add a new property to it
- wasn't sure how to type token
- multiple examples, not all of them work.

---

## this works

- this is what I settled on for jwt practice: https://github.com/Michaelleojacob/jwt_practice
- i don't like this solution, but the other attempts below were throwing errors.

```js
declare global {
  namespace Express {
    interface Request {
      token?: any;
    }
  }
}
```

---

## type error on token

```js
declare global {
  namespace Express {
    interface Request {
      token?:
        | { data: { name: string; id: number }; iat: number; exp: number }
        | JwtPayload;
    }
  }
}
```

## first attempt at extending express.Request

- threw a typescript error still

```js
export interface CustomRequest extends Request {
  token: string | JwtPayload;
}
```
