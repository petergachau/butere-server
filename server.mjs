import express from 'express';

const app=express()
const PORT=5000;

app.get('/', (req, res) => res.send('Hello World Tenant!'));



app.listen(PORT, function(err){
  if (err) console.log("Error in server setup")
  console.log("Server listening on Port", PORT);
})