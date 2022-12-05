## key points

- don't forget to migrate
  <br>
  <br>
- covers migration in prisma
- if `npx prisma migrate dev --name init` fails
- use `npx prisma db push --preview-feature`

---

```js
Error: P3014

Prisma Migrate could not create the shadow database. Please make sure the database user has permission to create databases. Read more about the shadow database (and workarounds) at https://pris.ly/d/migrate-shadow
```

```js
npx prisma db push --preview-feature
```

source: https://stackoverflow.com/questions/65384818/error-when-migrating-models-to-database-prisma
