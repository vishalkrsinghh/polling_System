
import questionCollection from "../model/questions.js"

export default async (req,res)=>{

    try {
        
        let question=await questionCollection.create(req.body);
        res.status(201).send("Question Created Sucessfully in Db");
    } catch (error) {
        res.satus(500).json({      
            message:" Error in Creating question"
        })
        console.log("error in creating question, Server Side error", error)
    }
}