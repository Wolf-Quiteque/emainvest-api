const express = require("express");

const axios = require("axios");

//criando rotas ou directorio

const usuarioGetRoute = require("./routes/usuarioGet");
const usuarioPostRoute = require("./routes/usuarioPost");
const usuarioDeleteRoute = require("./routes/usuarioDelete");
const usuarioPutRoute = require("./routes/usuarioPut");

const app = express();
//json
app.use(express.json());
//user

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, OPTIONS");
  next();
});

app.use("/api/usuario/get", usuarioGetRoute);
app.use("/api/usuario/post", usuarioPostRoute);
app.use("/api/usuario/delete", usuarioDeleteRoute);
app.use("/api/usuario/put", usuarioPutRoute);

app.listen(3000, function (req, res) {
  console.log("servidor rodando!");
});
