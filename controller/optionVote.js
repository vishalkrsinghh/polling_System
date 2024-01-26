
import optionCollection from "../model/options.js";

// controller for voting to option 
export default async (req,res)=>{
    
    try {
        let optionIdd=req.params.optionIdd;
        let option= await optionCollection.findOne({idd:optionIdd})
        if(option){
            // increase the option's vote count by 1.
            option.votes_Count+=1;
            option.save();
            res.status(200).send("vote added Successfully.");
        }else{
            res.status(404).send("option not found.")
        }
    } catch (error) {
        res.satus(500).json({
            message:" Error in voting to Option"
        })
        // console.log(" Error in Voting to Option, Server side Error ",error);
    }

}