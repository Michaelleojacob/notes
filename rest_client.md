small example using Rest Client extention in vscode:

tests are broken up by `###`.

To make post requests: `content-type: application/json` is required.

formatting and spacing is very important.

```
// auth.http
POST http://localhost:3003/signup
content-type: application/json

{
    "username": "migs",
    "password": "wigs"
}

###

POST http://localhost:3003/signin
content-type: application/json

{
    "username": "jj",
    "password": "l"
}
```
