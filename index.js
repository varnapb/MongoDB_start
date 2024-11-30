// Import
const express = require("express")
require("./connection")
var empModel = require("./model/employee")

// Initialise
var app = express()

// midd
app.use(express.json());

// Api creation

    //add 
app.post("/add",async (req,res)=>{
   try {
        await empModel(req.body).save()
        res.send("Data added!!");
   } catch (error) {
        console.log(error);
   }
})
    // view
app.get("/view",async (req,res)=>{
    try {
         const data = await empModel.find()
         res.send(data);
    } catch (error) {
         console.log(error);
    }
 })
    // Delete
 app.delete("/remove/:id",async (req,res)=>{
    try {
         await empModel.findByIdAndDelete(req.params.id)
         res.send("Data Deleted");
    } catch (error) {
         console.log(error);
    }
 }) 
    // Update
 app.put("/update/:id",async (req,res)=>{
    try {
         const update = await empModel.findByIdAndUpdate(req.params.id,req.body)
         res.send("Data Updated");
    } catch (error) {
         console.log(error);
    }
 })

// Port
app.listen(4040,()=>{
    console.log("Port is running");
});