const express = require("express");
const empresaGetRoute = require("./routes/empresaGet");
const empresaPostRoute = require("./routes/empresaPost");
const empresaDelete = require("./routes/empresaDelete");
const empresaPutRoute = require("./routes/empresaPut");

const app = express();
app.use(express.json());

const port = 3001;

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, OPTIONS");
  next();
});

app.use("/api/empresa/get", empresaGetRoute);
app.use("/api/empresa/post", empresaPostRoute);
app.use("/api/empresa/delete", empresaDelete);
app.use("/api/empresa/put", empresaPutRoute);

app.listen(port, () => console.log("servidor rodando"));
