import mongoose from "mongoose";

let queSchema=new mongoose.Schema({

    question:{
        type:String,
        require:true
    },

    options:[{

        type:Object
        // type:mongoose.Schema.Types.ObjectId,
        // ref:"optionCollection"
    }]

})

export default mongoose.model("queCollection", queSchema);

