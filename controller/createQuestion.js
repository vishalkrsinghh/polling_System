
import questionCollection from "../model/questions.js"

// function for creating questions.
export default async (req,res)=>{

    try {
        
        let question=await questionCollection.create(req.body);
        res.status(201).send("Question Created Successfully in Db");
    } catch (error) {
        res.status(500).json({      
            message:" Error in Creating question"
        })
        // console.log("error in creating question, Server Side error", error)
    }
}