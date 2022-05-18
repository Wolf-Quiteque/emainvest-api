const router = require("express").Router();
const axios = require("axios");

router.post("/", function (req, res) {
  res.send("Postando um no novo usuaro");
});

router.post("/novo", async (req, res) => {
  try {
    axios
      .post(
        "https://db-wolf-quiteque.vercel.app/api/db/ipo/usuario/post/novo",
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
