const router = require("express").Router();

const axios = require("axios");

router.get("/", (req, res) => {
  res.send("ordens buscadas ");
});

router.get("/ordens", async (req, res) => {
  try {
    axios("http://192.168.10.148:3000/api/db/webtrader/ordem/get/ordens").then(
      (response) => {
        res.status(200).json(response.data);
      }
    );
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    axios("http://192.168.10.148:3000/api/db/webtrader/ordem/get/ordens").then(
      (response) => {
        res.status(200).json(response.data);
      }
    );
  } catch (error) {
    res.status(500).json(error);
  }
});
module.exports = router;
