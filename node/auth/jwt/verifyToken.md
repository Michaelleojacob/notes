## key points

- jwt verify
- covers rest client token
- covers node verify code
- using typescript

---

## verifyToken

- working example

```js
const authToken = (req: Request, res: Response, next: NextFunction) => {
    try {
    const token = req.get("token");
    console.log(token);

    if (!token) {
      throw new Error();
    }

    const decoded = jwt.verify(token, process.env.SECRET!);
    console.log(decoded);
    req.token = decoded;

    next();
  } catch (err) {
    return res.status(401).json({ info: "invalid token from authToken" });
  }
};
```

- bad example

thought i had to do something like these:

```js
const token = req.get("Authorization")?.replace("token ", "");
```

```js
const token = req.header("Authorization")?.replace("Bearer ", "");
```

---

## rest client w/ token

![rest client example](../../../images/jwt_restClient.png)

```

get http://localhost:3004/prot
token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Im5hbWUiOiJtaWdzIiwiaWQiOjF9LCJpYXQiOjE2NzAxMzg2ODMsImV4cCI6MTY3MDE2MDI4M30.hGiSQmVVUzM4808azEg1jgANKUuiJP-59Ch5F77TRcQ

```

## syntax

```
###

get xx
token: xx

###
```
