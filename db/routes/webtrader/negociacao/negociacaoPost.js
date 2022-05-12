const router = require("express").Router();
const clientPromise = require("../../../DB/conexao");

router.post("/", async (req, res) => {
  if (client) {
    res.send("Base de dados conectada");
  } else res.send("Base de dados nao conectada");
});

router.post("/novo", async (req, res) => {
  const client = await clientPromise;
  const db = client.db("Webtrader");
  try {
    const resultado = await db.collection("negociacao").insertOne(req.body);
    res.status(200).json("cadastrado com sucesso");
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
