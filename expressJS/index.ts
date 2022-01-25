import express from 'express';

const app = express();
const PORT = 3456;

app.get('/', (req, res) => {
  res.send('Hello world yahooo');
});

app.listen(PORT, () => {
  console.log(`Express with Typescript yahooo! http://localhost:${PORT}`);
});