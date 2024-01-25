
import optionCollection from "../model/options.js";
import questionCollection from "../model/questions.js";

export default async (req,res)=>{
    
    try {
        let questionIdToDelete=req.params.queId;

        let question= await questionCollection.findOne({_id:questionIdToDelete})
        if(question){
            await questionCollection.findByIdAndDelete(questionIdToDelete);
            await optionCollection.deleteMany({question:questionIdToDelete}); // Delete Options of the Question From Db.

            res.status(200).send("Question Deleted Sucessfully")
        }else{
            res.status(404).send("Question not found.")
        }
    } catch (error) {
        res.satus(500).json({
            message:" Error in deleting question"
        })
        console.log(" Error in Deleting Question, Server side Error ",error);
    }

}
