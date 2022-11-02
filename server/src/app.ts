import express from "express";
import { verifyUser } from "./auth/auth";

const app = express();
const port = 3001;

app.use(verifyUser);

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.listen(port, () => {
  return console.log(`listening at http://localhost:${port}`);
});
