const { ObjectId }= require("bson")
const router = require("express").Router();
const clientPromise= require("../../../DB/conexao")

router.get("/", async(req,res)=>{
   
    const client = await clientPromise
    if (client){res.send("Base de dados conectada")}
    else res.send("Base de dados nao conectada")
})

router.get("/ordens", async(req,res)=>{
    const client = await clientPromise
    const db= client.db("Webtrader");
    try {
     const resultado = await db.collection("ordens").find(
         {}
     ).toArray()
     res.status(200).json(resultado)  
    } catch (error) {
        res.status(500).json(error)
    }
    
})

router.get("/:id", async(req,res)=>{
    const client = await clientPromise
    const db = client.db("Webtrader");
    
    try {
        const resultado = await db.collection("ordens").findOne({_id: new ObjectId(req.params.id)});
        res.status(200).json(resultado)  
       } catch (error) {
           res.status(500).json(error)
       }
})




module.exports = router;