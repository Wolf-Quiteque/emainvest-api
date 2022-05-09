const express = require("express");
const negociacoesGetRouter = require("./routes/negociacoesGet");
const negociacoesPostRouter = require("./routes/negociacoesPost");
const negociacoesDeletRouter = require("./routes/negociacoesDelet");
const negociacoesPutRouter = require("./routes/negociacoesPut");

const app = express();
app.use(express.json());

const port = 3002;

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, OPTIONS");
  next();
});

app.use("/api/negociacoes/get", negociacoesGetRouter);
app.use("/api/negociacoes/post", negociacoesPostRouter);
app.use("/api/negociacoes/delete", negociacoesDeletRouter);
app.use("/api/negociacoes/put", negociacoesPutRouter);

app.listen(port, () => console.log("servidor rodando"));
