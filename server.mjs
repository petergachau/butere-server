import express from 'express';

const app=express()
const PORT=5000;

app.get('/', (req, res) => res.send('Hello school'));



app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));
