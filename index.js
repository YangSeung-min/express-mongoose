require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const { swaggerUi, specs } = require("./swagger");
// const bodyParser = require("body-parser");
// import { graphqlHTTP } from "express-graphql";

const { PORT, MONGO_URI } = process.env;

const app = express();
const port = 4500;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Successfully connected to mongodb"))
  .catch((e) => console.error(e));

// ROUTERS
app.use("/schedule", require("./routes/schedule"));

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
