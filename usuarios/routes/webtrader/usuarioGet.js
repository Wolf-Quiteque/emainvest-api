const router = require("express").Router();
const axios = require("axios");

router.get("/", function (req, res) {
  res.send("<h2>Receber dados das outra a APIs!!!</h2>");
});

router.get("/usuarios", async (req, res) => {
  try {
    axios
      .get(
        "https://db-wolf-quiteque.vercel.app/api/db/webtrader/usuario/get/usuarios/"
      )
      .then((response) => {
        res.status(200).json(response.data);
      });
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    axios
      .get(
        "https://db-wolf-quiteque.vercel.app/api/db/webtrader/usuario/get/" +
          req.params.id
      )
      .then((response) => {
        res.status(200).json(response.data);
      });
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
