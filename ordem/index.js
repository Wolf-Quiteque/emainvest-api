const express = require("express");
const ordemGetRouter = require("./routes/ordemGet");
const ordemDeleteRouter = require("./routes/ordemDelete");
const ordemPostRouter = require("./routes/ordemPost");
const ordemPutRouter = require("./routes/ordemPut");
const app = express();
app.use(express.json());

const port = 3003;
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, OPTIONS");
  next();
});

app.use("/api/ordem/get", ordemGetRouter);
app.use("/api/ordem/post", ordemPostRouter);
app.use("/api/ordem/delete", ordemDeleteRouter);
app.use("/api/ordem/put", ordemPutRouter);
app.listen(port, () => console.log("servidor rodando"));
