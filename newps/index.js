const express= require("express");
const app= express();
require("./redis")

app.listen(3001,()=>{
    console.log("server running at 2222");
});