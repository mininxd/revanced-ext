import express from "express";
import {config} from "dotenv";
import cors from "cors";

import revanced from "./routes/revanced.js";
import gms from "./routes/gms.js";

const app = express();
app.use(express.json());
app.use(cors());

app.use('/', revanced);
app.use('/gms', gms);

app.listen(3000, () => {
  console.log(`http://localhost:3000`);
});