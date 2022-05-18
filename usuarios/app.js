const express = require("express");

//criando rotas ou directorio

const usuarioWbGetRoute = require("./routes/webtrader/usuarioGet");
const usuarioWbPostRoute = require("./routes/webtrader/usuarioPost");
const usuarioWbDeleteRoute = require("./routes/webtrader/usuarioDelete");
const usuarioWbPutRoute = require("./routes/webtrader/usuarioPut");

const usuarioIpoGetRoute = require("./routes/ipo/usuarioGet");
const usuarioIpoPostRoute = require("./routes/ipo/usuarioPost");
const usuarioIpoDeleteRoute = require("./routes/ipo/usuarioDelete");
const usuarioIpoPutRoute = require("./routes/ipo/usuarioPut");

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

app.use("/api/wb/usuario/get", usuarioWbGetRoute);
app.use("/api/wb/usuario/post", usuarioWbPostRoute);
app.use("/api/wb/usuario/delete", usuarioWbDeleteRoute);
app.use("/api/wb/usuario/put", usuarioWbPutRoute);

app.use("/api/ipo/usuario/get", usuarioIpoGetRoute);
app.use("/api/ipo/usuario/post", usuarioIpoPostRoute);
app.use("/api/ipo/usuario/delete", usuarioIpoDeleteRoute);
app.use("/api/ipo/usuario/put", usuarioIpoPutRoute);

app.listen(3003, function (req, res) {
  console.log("servidor rodando!");
});
