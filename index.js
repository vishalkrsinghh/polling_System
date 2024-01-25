import express from "express";

import dotEnvConfig from "./config/dotEnvConfig.js";
import mongoDbConfiguration from "./config/mongoDbConfiguration.js";

import queCollection from "./model/questions.js"
import routes from "./routes/questionRoute.js";
import routes2 from "./routes/optionRoute.js";

let app= express();

app.use(express.urlencoded());
app.use(express.json());


app.use("/questions",routes )
app.use("/options", routes2)

app.listen("4000", ()=>{
    console.log("server is running");
})