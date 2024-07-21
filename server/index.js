import express from "express";
import dotenv from "dotenv";
import Connection from "./database/db.js";
import DefaultData from "./default.js";
import router from "./routes/routes.js";
import bodyParser from "body-parser";
import cors from "cors";
const app = express();
dotenv.config();
const port = 8000;

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;
Connection(USERNAME, PASSWORD);
app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", router);
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

DefaultData();
