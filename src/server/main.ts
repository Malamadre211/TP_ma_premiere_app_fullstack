import express from "express";
import ViteExpress from "vite-express";
import fs from "fs-extra";
import "dotenv/config"

const fileName = "hello.json"

console.log("env", process.env.PORT)
const port = process.env.PORT as string

const app = express();

app.get("/hello", (_, res) => {
  res.send("Hello Vite + TypeScript!");
});

app.get('/hello/:nom', function (req, res) {
  const data = fs.readJSONSync(fileName)
  const hellos = data
  console.log('hellos', hellos)
  hellos.push(req.params.nom)
  fs.writeJsonSync(fileName, hellos)
  res.send("Bonjour " + req.params.nom);
}) 

app.get('/hellos', function (req, res) {
  const data = fs.readJSONSync(fileName)
  console.log(data)
  res.send(JSON.stringify(data))
})

app.get('/hellos', function (req, res) {
  const data = fs.readJSONSync(fileName)
  console.log(data)
  res.send(JSON.stringify(data))
})

ViteExpress.listen(app, parseInt(port), () =>
  console.log("Server is listening on port 3030...")
);