const express= require("express");
const app= express();
require("./redis")

app.listen(3002,()=>{
    console.log("server running at 2222");
});