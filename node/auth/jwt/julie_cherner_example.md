## key points:

- link to example I followed to get verify token working
- comments

form: https://dev.to/juliecherner/authentication-with-jwt-tokens-in-typescript-with-express-3gb1
repo: https://github.com/juliecherner/admin-app-backend

```js
// adding token to Request
export interface CustomRequest extends Request {
 token: string | JwtPayload;
}

export const auth = async (req: Request, res: Response, next: NextFunction) => {
 try {
  // getting the token named Bearer
   const token = req.header('Authorization')?.replace('Bearer ', '');

  // if no token
   if (!token) {
     throw new Error();
   }

  // the data inside the jwt + verify
   const decoded = jwt.verify(token, SECRET_KEY);
   (req as CustomRequest).token = decoded;

   next();

 } catch (err) {
  // if no token, or token has expired
   res.status(401).send('Please authenticate');
 }
};
```
