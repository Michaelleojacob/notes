## key points

- deploying a node+express app using prisma (postgresql).
- Postgres hosted on elephantsql.
- Node+express hosted on render.

practice app: https://github.com/Michaelleojacob/testing-elephantsql

---

### using prisma

follow each step of the getting started guide
found here: https://www.prisma.io/docs/getting-started/quickstart

```js
npm init -y
npm install typescript ts-node @types/node prisma --save-dev
```

run

```js
npx prisma init --datasource-provider postgresql
```

do not forget to

```js
npx prisma migrate dev --name init
```

create the tsconfig file and entry point:

```js
touch tsconfig.json app.ts
```

without entrypoint.ts aka `app.ts` or `script.ts` the tsconfig.json will throw an error.

```js
// tsconfig.json
{
  "compilerOptions": {
    "sourceMap": true,
    "outDir": "dist",
    "strict": true,
    "lib": ["esnext"],
    "esModuleInterop": true
  }
}
```
