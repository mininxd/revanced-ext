import express from "express";
import {config} from "dotenv";
import cors from "cors";
config()

const app = express();
app.use(cors());
app.use(express.json());


app.get("/", (req, res) => {
  res.send("Hello from Express with ESModules!");
});


app.listen(3000, () => {
  console.log(`http://localhost:3000`);
});