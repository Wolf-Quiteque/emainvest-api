const express = require("express");
const dotenv = require("dotenv");

const app = express();
app.use(express.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, OPTIONS");
  next();
});

dotenv.config();
//routes
const empresaGetRoute = require("./routes/empresas/empresaGet");
const empresaPostRoute = require("./routes/empresas/empresaPost");
const empresaPutRoute = require("./routes/empresas/empresaPut");
const empresaDeleteRoute = require("./routes/empresas/empresaDelete");

const relatorioGetRoute = require("./routes/relatorio/relatorioGet");
const relatorioPostRoute = require("./routes/relatorio/relatorioPost");
const relatorioPutRoute = require("./routes/relatorio/relatorioPut");
const relatorioDeletetRoute = require("./routes/relatorio/relatorioDelete");

const negociacaoGetRoute = require("./routes/webtrader/negociacao/negociacaoGet");
const negociacaoPostRoute = require("./routes/webtrader/negociacao/negociacaoPost");
const negociacaoPutRoute = require("./routes/webtrader/negociacao/negociacaoPut");
const negociacaoDeleteRoute = require("./routes/webtrader/negociacao/negociacaoDelete");

const usuarioWbPostRoute = require("./routes/webtrader/usuarios/usuarioPost");
const usuarioWbGetRoute = require("./routes/webtrader/usuarios/usuarioGet");
const usuarioWbDeleteRoute = require("./routes/webtrader/usuarios/usuarioDelete");
const usuarioWbPutRoute = require("./routes/webtrader/usuarios/usuarioPut");

const usuarioIpoPostRoute = require("./routes/ipo/usuarios/usuarioPost");
const usuarioIpoGetRoute = require("./routes/ipo/usuarios/usuarioGet");
const usuarioIpoDeleteRoute = require("./routes/ipo/usuarios/usuarioDelete");
const usuarioIpoPutRoute = require("./routes/ipo/usuarios/usuarioPut");

const ordemGetRoute = require("./routes/webtrader/ordens/ordemGet");
const ordemPostRoute = require("./routes/webtrader/ordens/ordemPost");
const ordemPutRoute = require("./routes/webtrader/ordens/ordemPut");
const ordemDeleteRoute = require("./routes/webtrader/ordens/ordemDelete");

const port = process.env.PORT || 3001;

//routes
app.use("/api/db/empresa/get", empresaGetRoute);
app.use("/api/db/empresa/post", empresaPostRoute);
app.use("/api/db/empresa/put", empresaPutRoute);
app.use("/api/db/empresa/delete", empresaDeleteRoute);

app.use("/api/db/relatorio/get", relatorioGetRoute);
app.use("/api/db/relatorio/post", relatorioPostRoute);
app.use("/api/db/relatorio/put", relatorioPutRoute);
app.use("/api/db/relatorio/delete", relatorioDeletetRoute);

app.use("/api/db/webtrader/negociacao/get", negociacaoGetRoute);
app.use("/api/db/webtrader/negociacao/Post", negociacaoPostRoute);
app.use("/api/db/webtrader/negociacao/put", negociacaoPutRoute);
app.use("/api/db/webtrader/negociacao/delete", negociacaoDeleteRoute);

app.use("/api/db/webtrader/usuario/post", usuarioWbPostRoute);
app.use("/api/db/webtrader/usuario/get", usuarioWbGetRoute);
app.use("/api/db/webtrader/usuario/delete", usuarioWbDeleteRoute);
app.use("/api/db/webtrader/usuario/put", usuarioWbPutRoute);

app.use("/api/db/ipo/usuario/post", usuarioIpoPostRoute);
app.use("/api/db/ipo/usuario/get", usuarioIpoGetRoute);
app.use("/api/db/ipo/usuario/delete", usuarioIpoDeleteRoute);
app.use("/api/db/ipo/usuario/put", usuarioIpoPutRoute);

app.use("/api/db/webtrader/ordem/post", ordemPostRoute);
app.use("/api/db/webtrader/ordem/get", ordemGetRoute);
app.use("/api/db/webtrader/ordem/delete", ordemDeleteRoute);
app.use("/api/db/webtrader/ordem/put", ordemPutRoute);

app.listen(port, () => console.log("servidor esta ligado"));
