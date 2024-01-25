
import questionCollection from "../model/questions.js"

export default async (req,res)=>{

    try {
        
        let question=await questionCollection.create(req.body);
        console.log(question);
        // console.log("Question Cresated Successfully in Db")
        res.send("Question Created Sucessfully in Db");
    } catch (error) {
        console.log("error in creating question, Server Side error", error)
    }
}