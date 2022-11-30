import express from "express";
import { verifyUser } from "./auth/auth";
const dbHandler = require("./db/app");

const app = express();
const port = 3001;

// app.use(verifyUser);

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.get("/tasks", (req, res) => dbHandler.getAllTasks);
app.post("/tasks", (req, res) => dbHandler.addTask);
app.delete("/tasks/:id", (req, res) => dbHandler.deleteTask);

app.listen(port, () => {
  return console.log(`listening at http://localhost:${port}`);
});
