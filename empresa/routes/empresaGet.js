const router = require("express").Router();
const axios = require("axios");

//index introdução
router.get("/", (req, res) => {
  res.send(
    "bem vindo a rotas das empresas. <br/> <br/> * <strong>/empresa</strong> - pegar todas empresa  "
  );
});

//route para buscar todas empresas
router.get("/empresa", async (req, res) => {
  try {
    axios(
      "https://db-wolf-quiteque.vercel.app/api/db/empresa/get/empresas"
    ).then((response) => {
      res.status(200).json(response.data);
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
