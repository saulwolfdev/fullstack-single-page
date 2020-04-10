const {Router}=require("express");
const router=Router();

router.get("/",(req,res)=>{
    res.json({ text: "hello"  });
})


 module.exports=router;