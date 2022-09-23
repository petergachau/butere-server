import { createServer } from 'http';

createServer((req, res) => {
  res.write('Hello Worldssss!');
  res.end();
}).listen(process.env.PORT);
