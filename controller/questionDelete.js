
import optionCollection from "../model/options.js";
import questionCollection from "../model/questions.js";

// controller for deleting questions
export default async (req,res)=>{
    
    try {
        let questionIdToDelete=req.params.queId;

        let question= await questionCollection.findOne({_id:questionIdToDelete})
        if(question){
            // deleting question from question collection
            await questionCollection.findByIdAndDelete(questionIdToDelete);
            // Delete Options of the Question From option collection in db.
            await optionCollection.deleteMany({question:questionIdToDelete}); 

            res.status(200).send("Question Deleted Successfully")
        }else{
            res.status(404).send("Question not found.")
        }
    } catch (error) {
        res.status(500).json({
            message:" Error in deleting question"
        })
        // console.log(" Error in Deleting Question, Server side Error ",error);
    }

}
