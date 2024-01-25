
import optionCollection from "../model/options.js";


export default async (req,res)=>{
    
    try {
        let optionIdd=req.params.optionIdd;
        console.log(optionIdd);
        let option= await optionCollection.findOne({idd:optionIdd})
        if(option){
            option.votes_Count+=1;
            option.save();
        }else{
            res.send("option not found.")
        }
        res.send("vote added Sucessfully.");
    } catch (error) {
        
    }

}