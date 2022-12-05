## key points

- delete all users example

---

```js
// to delete all users:
async function deleteAllUsers() {
  await prisma.user.deleteMany({});
  const users = await prisma.user.findMany();
  console.log(users);
}

deleteAllUsers()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
```
