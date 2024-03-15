const express= require ("express");
const app =express();
const port =80;
app.get("/",(req,res)=>{
    res.send("this is my first express app with harry")
});
app.get("/about",(req,res)=>{
    res.status(404).send("this is page is not found.")
});
app.get("/this",(req,res)=>{
    res .status(200).send("this is my first express app with harry 200")
});
app.listen(port,()=>{
    console.log(`my work is running in port${port}`)
})