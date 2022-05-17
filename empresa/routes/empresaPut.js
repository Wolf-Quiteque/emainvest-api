const router = require("express").Router();

const axios = require("axios");

router.put("/", (req, res) => {
  res.send("rotas para actualizar empresas");
});

router.put("/:id", async (req, res) => {
  try {
    axios
      .put(
        "https://db-wolf-quiteque.vercel.app/api/db/empresa/put/" +
          req.params.id,
        req.body
      )
      .then((response) => {
        res.status(200).json(response.data);
      });
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
