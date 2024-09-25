const express=require("express");
const app=express();

app.use(express.static("public"));

let port=3000;

app.listen(port,()=>{
    console.log("listened successfuly!!");
});

app.set("view engine","ejs");

app.get("/home",(req,res)=>{
    res.render("home.ejs");
});