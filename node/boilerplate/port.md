## key points

- process.env.PORT || num

### port

```js
const port = process.env.PORT || 3001;
```

### listen

```js
const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
```
