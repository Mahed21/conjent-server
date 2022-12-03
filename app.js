const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const { query } = require("express");
app.use(express.json());
app.use(cors());
const userRouter = require("./router/user.router");
const adminRouter = require("./router/admin.router");

app.use("/user", userRouter);
app.use("/admin", adminRouter);

module.exports = app;
