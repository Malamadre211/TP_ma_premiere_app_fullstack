import express from "express";
import ViteExpress from "vite-express";
import fs from "fs-extra";
import "dotenv/config"

console.log("env", process.env.PORT)
const port = process.env.PORT as string

const app = express();

app.get("/hello", (_, res) => {
  res.send("Hello Vite + TypeScript!");
});

app.get('/hello/:nom', function (req, res) {
  res.send("Bonjour " + req.params.nom);
})

ViteExpress.listen(app, parseInt(port), () =>
  console.log("Server is listening on port 3030...")
);