const router = require("express").Router();
const clientPromise= require("./../../DB/conexao")

router.put("/", async(req,res)=>{
   
    const client = await clientPromise
    if (client){res.send("Base de dados conectada")}
    else res.send("Base de dados nao conectada")
})

router.put("/relatorio", async(req,res)=>{
    res.send("todas os relatorios");
})


module.exports = router;