
import mongoose from "mongoose";
import optionCollection from "../model/options.js";
import questionCollection from "../model/questions.js";

// controller for deleting options
export default async (req,res)=>{
    
    try {
        let optionIdToDelete=req.params.optionId;

        let option= await optionCollection.findOne({_id:optionIdToDelete})
        if(option){
            
            // deleting option object from question collection
            await questionCollection.updateOne(   
                { _id: option.question },
                { $pull: { 'options': { _id: new mongoose.Types.ObjectId(optionIdToDelete) } } }
              )

            // deleting option from option collection.
            await optionCollection.findByIdAndDelete(optionIdToDelete);

            res.status(200).send("Option Deleted Successfully")
        }else{
            res.status(404).send("Option not found.")
        }
    } catch (error) {
        res.status(500).json({
            message:"Error in deleting Option"
        })
        // console.log(" Error in Deleting Option, Server side Error ",error);
    }

}