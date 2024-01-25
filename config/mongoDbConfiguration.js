
import mongoose from "mongoose";


let URI= process.env.MONGODB_URI;
export default mongoose.connect(URI).then(()=>{
    console.log("Db connected sucessfully");
}).catch((err)=>{
    console.log(err,"Error in connecting Db");
})