
import optionCollection from "../model/options.js";
import questionCollection from "../model/questions.js";
import { nanoid } from 'nanoid'


export default async (req,res)=>{
    
    try {
        let questionId=req.params.queId;
        nanoid();
        let question= await questionCollection.findOne({_id:questionId})
        if(question){
            let idd=nanoid();
            let option=await optionCollection.create({option:req.body.option,idd:idd,question:question._id,votes_Count:0,Link_To_Vote:`http://127.0.0.1:4000/options/${idd}/add_vote`})

            question.options.push(option);
            question.save();
            res.status(201).send("Option created Sucessfully.");
        }else{
            res.status(404).send("Question not found.")
        }
    } catch (error) {
        res.satus(500).json({
            message:" Error in Creating Option"
        })
        console.log(" Error in Creating Option, Server side Error ",error);
    }

}
