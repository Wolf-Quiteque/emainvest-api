const router = require("express").Router();
const clientPromise= require("./../../../DB/conexao")
const { ObjectId }= require("bson")


router.put("/:id", async(req,res)=>{
    const client = await clientPromise
    const db = client.db("Webtrader");
    try {
        const resultado = await db .collection("usuarios").updateOne({_id: new ObjectId(req.params.id)},{$set: req.body});
        console.log(resultado);
        res.status(200).json("Actualizado com Sucessso")  
       } catch (error) {
           res.status(500).json(error)
       }
})
router.put("/usuarios", async(req,res)=>{
    res.send("todos os usuarios");
})


module.exports = router;