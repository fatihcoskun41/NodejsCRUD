const router = require("express").Router()
const Product = require("../models/Product")

router.get("/getAllProducts",async (req,res)=>{
    try {
        const product = await Product.find()
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json(error)
    }
  

})
router.post("/addproduct",async (req,res)=>{
    const newProduct = new Product({
        name:req.body.name
    })
    try {
        const savedProduct = await newProduct.save()
        res.status(200).json(savedProduct)
    } catch (error) {
        res.status(500).json(error)
        
    }

})
router.put("/update/:id",async (req,res)=>{
    try {
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id,{
            $set:req.body
        },{new:true})
        res.status(200).json(updatedProduct)
        
    } catch (error) {
        res.status(500).json(error)
        
    }
})
router.delete("/delete/:id",async (req,res)=>{
    try {
        await Product.findByIdAndDelete(req.params.id)
        res.status(200).json("User has been deleted")
        
    } catch (error) {
        res.status(500).json(error)
        
    }
})
module.exports = router