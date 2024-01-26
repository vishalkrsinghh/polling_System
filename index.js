import express from "express";

import dotEnvConfig from "./config/dotEnvConfig.js";
import mongoDbConfiguration from "./config/mongoDbConfiguration.js";

import routes from "./routes/questionRoute.js";
import routes2 from "./routes/optionRoute.js";

let app= express();

// for read form body data.
app.use(express.urlencoded());
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Polling System Api.")
})
app.use("/questions",routes )
app.use("/options", routes2)

let PORT= process.env.PORT || 4000
app.listen(PORT, ()=>{
    console.log("server is running");
})