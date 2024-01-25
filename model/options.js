import mongoose from "mongoose";


let optionSchema= new mongoose.Schema({

    option:{
        type:String,
        require:true
    },

    idd:{
        type:String,
        require:true,
        unique:true
    },

    Link_To_Vote:{
        type:String
    },

    votes_Count:{
        type:Number,
        default:0
    },

    question:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"queCollection"
    }

})

export default mongoose.model("optionCollection",optionSchema);