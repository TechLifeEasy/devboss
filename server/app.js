const createError = require("http-errors");
const express = require("express");
const path = require("path");
require("dotenv");
var cors = require('cors')
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const port = process.env.PROT || 5000;
const db = require("./db/connections/DataBaseConnection");
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const projectsRouter = require("./routes/projects");
const findRouter = require("./routes/find");
const sourceRouter = require("./routes/source");

const app = express();
app.use(cors())
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
db.Connect();

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/projects", projectsRouter);
app.use("/finds", findRouter);
app.use("/sources", sourceRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
