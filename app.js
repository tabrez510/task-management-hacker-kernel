const express = require("express");
const { Model } = require("objection");
const db = require("./config/db");
const exphbs = require("express-handlebars");

const userRoutes = require("./routes/userRoutes");
const taskRoutes = require("./routes/taskRoutes");

const app = express();
Model.knex(db);

app.use(express.urlencoded({ extended: true }));
app.use("/public", express.static("public"));

app.engine("hbs", exphbs.engine({ extname: ".hbs" }));
app.set("view engine", "hbs");

app.use(userRoutes);
app.use(taskRoutes);

module.exports = app;
