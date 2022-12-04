## key points

- setup a new ts project in node

---

## one liner

```
npm init -y && npm i -D typescript ts-node @types/node @types/express && npm i express && touch app.ts server.ts tsconfig.json .env .gitignore
```

---

## set by step

- `npm init -y`
- `npm i -D typescript ts-node @types/node @types/express`
- `npm i express`
- `touch app.ts server.ts tsconfig.json`

---

## tsconfig.json

```js
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

---

## gitignore

```
node_modules
dist
build
npm-debug.log
.nyc
.env
*.env
.DS_Store
```
