## key points

- how to parse a token use:

```js
const token = req.get("token");
```

---

## full example

```ts
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

```ts
// console.log(req.get("Authorization")?.replace("token ", ""));
// const token = req.header("Authorization")?.replace("Bearer ", "");

// replaced by

const token = req.get("token");
```
