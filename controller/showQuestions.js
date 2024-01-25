
import questionCollection from "../model/questions.js"

export default async (req,res)=>{

    try {
        let questionId=req.params.queId;
        let question= await questionCollection.findOne({_id:questionId})
        if(question){
            res.send(question);
        }else{
            res.send("Question Not Found")
        }
    } catch (error) {
        console.log("Server Side error", error)
    }
}