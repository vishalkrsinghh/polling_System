
import mongoose from "mongoose";
import optionCollection from "../model/options.js";
import questionCollection from "../model/questions.js";

export default async (req,res)=>{
    
    try {
        let optionIdToDelete=req.params.optionId;

        let option= await optionCollection.findOne({_id:optionIdToDelete})
        if(option){
     
            await questionCollection.updateOne(   
                { _id: option.question },
                { $pull: { 'options': { _id: new mongoose.Types.ObjectId(optionIdToDelete) } } }
              )

            await optionCollection.findByIdAndDelete(optionIdToDelete);

            res.status(200).send("Option Deleted Sucessfully")
        }else{
            res.status(404).send("Option not found.")
        }
    } catch (error) {
        res.satus(500).json({
            message:" Error in deleting Option"
        })
        console.log(" Error in Deleting Option, Server side Error ",error);
    }

}