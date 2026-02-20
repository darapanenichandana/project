import express from "express";
import cors from "cors";
import { config } from "./config.js";
import uploadRoute from "./routes/upload.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("public"));
app.use("/api", uploadRoute);

app.listen(config.PORT, () => {
  console.log(`DocExtract running on port ${config.PORT}`);
});