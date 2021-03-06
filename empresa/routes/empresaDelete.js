const router = require("express").Router();
const axios = require("axios");

router.delete("/", (req, res) => {
  res.send("rotas para eliminar empresa");
});

router.delete("/:id", async (req, res) => {
  try {
    axios
      .delete(
        "https://db-wolf-quiteque.vercel.app/api/db/empresa/delete/" +
          req.params.id
      )
      .then((response) => {
        res.status(200).json(response.status);
      });
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
