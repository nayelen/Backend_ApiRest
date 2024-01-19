require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose');
const { connectDB } = require("./src/config/db");
const instrumentRouter = require("./src/api/routes/instruments");
const familyRouter = require("./src/api/routes/families");

const app = express();
app.use(express.json());

connectDB();

app.use("/api/v1/instruments", instrumentRouter)
app.use("/api/v1/families", familyRouter)

app.use("*", (req, res, next) => {
  return res.status(404).json("Route not found");
})

app.listen(3000, () => {
  console.log("Servidor levantado en: http://localhost:3000 👩🏻‍💻")
})