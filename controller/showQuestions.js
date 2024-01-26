
import questionCollection from "../model/questions.js"

// controller for showing questions with it's all options.
export default async (req,res)=>{

    try {
        let questionId=req.params.queId;
        let question= await questionCollection.findOne({_id:questionId})
        if(question){
            res.status(200).send(question);
        }else{
            res.status(404).send("Question Not Found")
        }
    } catch (error) {
        res.satus(500).json({
            message:" Error in finding question"
        })
        // console.log(" Error in finding question, Server Side error", error)
    }
}