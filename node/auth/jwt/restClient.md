## key points

- syntax for sending a token
- get
- post

```
GET http://localhost:3004

###

POST http://localhost:3004
content-type: application/json

{
    "n":"migs",
    "p":"wigs"
}
###

POST http://localhost:3004/login
content-type: application/json

{
    "n":"migs",
    "p":"wigs"
}

###
get http://localhost:3004/prot
token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Im5hbWUiOiJtaWdzIiwiaWQiOjF9LCJpYXQiOjE2NzAxMzg2ODMsImV4cCI6MTY3MDE2MDI4M30.hGiSQmVVUzM4808azEg1jgANKUuiJP-59Ch5F77TRcQ
```
