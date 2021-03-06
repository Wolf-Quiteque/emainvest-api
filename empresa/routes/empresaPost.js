const router = require("express").Router();
const axios = require("axios");

router.post("/", (req, res) => {
  res.send("seja bem vindo ao cadastro da empresa");
});

router.post("/novo", async (req, res) => {
  try {
    console.log(req.body);
    axios
      .post(
        "https://db-wolf-quiteque.vercel.app/api/relatorio/empresa/post/cadastro",
        req.body
      )
      .then((response) => {
        res.status(200).json(response.status);
      });
  } catch (error) {
    res.status(500).json(error);
  }
});
module.exports = router;
