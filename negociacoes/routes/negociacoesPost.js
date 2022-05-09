const router = require("express").Router();
const axios = require("axios");

// router.post("/", (req, res) => {
// res.send("negociacoes publicadas");
// });
// router.post("/novo", async (req, res) => {
// res.send(req.params);
// });

router.post("/", (req, res) => {
  res.send("seja bem vindo cadastro  de negociacoes");
});
router.post("/novo", async (req, res) => {
  try {
    axios
      .post(
        "http://192.168.10.148:3000/api/db/webtrader/negociacao/post/novo",
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
