const router = require("express").Router();
const clientPromise= require("./../../../DB/conexao")
const { ObjectId }= require("bson")

 
router.put("/:id", async(req,res)=>{
    const client = await clientPromise
    const db = client.db("Webtrader");
    try {
        const resultado = await db .collection("negociacao").updateOne({_id: new ObjectId(req.params.id)},{$set: req.body});
        console.log(resultado);
        res.status(200).json("Actualizado com Sucessso")  
       } catch (error) {
           res.status(500).json(error)
       }
})
router.put("/negociacoes", async(req,res)=>{
    res.send("todas as negociações");
})


router.put("/negociacao-Especifica", async(req,res)=>{
    res.send("negociação");
})


module.exports = router;