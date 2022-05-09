const router = require("express").Router();

const axios = require("axios");

router.delete("/", (req, res) => {
  res.send("rotas para eliminar negociacoes");
});
router.delete("/:id", async (req, res) => {
  try {
    axios
      .delete(
        "http://192.168.10.148:3000/api/db/webtrader/negociacao/delete/" +
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
