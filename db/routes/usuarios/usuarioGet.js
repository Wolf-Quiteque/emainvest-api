const router = require("express").Router();
const clientPromise= require("./../../DB/conexao")

router.get("/", async(req,res)=>{
   
    const client = await clientPromise
    if (client){res.send("Base de dados conectada")}
    else res.send("Base de dados nao conectada")
})

router.get("/usuario", async(req,res)=>{
    res.send("todos os usuarios");
})



module.exports = router;