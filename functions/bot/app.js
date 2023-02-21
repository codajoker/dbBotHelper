

const logger = require("morgan");
const cors = require("cors");
const express = require("express");
const storesController = require("./controller/index");


const app = express();
const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));

// app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use("/user", storesController);


app.use((req, res) => {
    res.status(404).json({ message: "Not found" });
  });
  
  app.use((err, req, res, next) => {
    console.log('====================================');
    console.log(err.status);
    console.log('====================================');
    res.status(err.status || 500).json({ message: err.message });
  });
  
module.exports = app;
