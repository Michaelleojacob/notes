## key points

- covers `.http` file
- basic `GET` and `POST` requests in a `rest_client.http` file
  <br>
  <br>
- tests are broken up by `###`.
- `POST` requests require: `content-type: application/json`
- formatting and spacing is very important.

## example

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
