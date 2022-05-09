const router = require("express").Router();

router.get("/", async(req,res)=>{
    res.send("Autenticação usuario");
})

router.get("/login", async(req,res)=>{
    res.send("digite suas credenciais");
})
module.exports = router;