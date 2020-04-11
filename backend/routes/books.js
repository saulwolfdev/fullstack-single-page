const {Router}=require("express");
const router=Router();

const Book=require("../models/Book");

router.get("/",async(req,res)=>{
    const books=await Book.find()
    res.json(books)
})
router.post("/",async(req,res)=>{
    console.log(req.body)
    const {title,author,isbn}=req.body
    const newBook=new Book({title,author,isbn})
     await newBook.save()
    res.json({message:"Book Saved"})
})
router.delete("/:id",async(req,res)=>{
     await Book.findByIdAndDelete(req.params.id);
    res.json({
        message:"this is book has deleted"
    })
})

 module.exports=router;