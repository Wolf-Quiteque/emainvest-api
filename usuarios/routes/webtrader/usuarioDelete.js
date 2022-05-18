const router = require("express").Router();
const axios = require("axios");

router.delete("/", function (req, res) {
  res.send("<h2>Deletando alguns usuario do Banco de dados!</h2>");
});

router.delete("/:id", async (req, res) => {
  try {
    axios
      .delete(
        "https://db-wolf-quiteque.vercel.app/api/db/webtrader/usuario/delete/" +
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
