## key points

- build ts files:
- use nodemon
- `npx nodemon app.ts`
  <br>
  <br>
- use command `tsc`

---

```
npm i -D nodemon
```

```js
// npx nodemon <entrypoint.js/.ts>
npx nodemon app.ts
```

---

watch built ts files:

\*if using views copy the views folder into `./dist` using `cp -r`

`tsc --watch`
