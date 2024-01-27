
import optionCollection from "../model/options.js";
import questionCollection from "../model/questions.js";

// controller for voting to option 
export default async (req, res) => {

    try {
        let optionIdd = req.params.optionIdd;
        let option = await optionCollection.findOne({ idd: optionIdd })
        if (option) {
            // increase the option's vote count by 1.
            option.votes_Count += 1;
            option.save();

            // increase the option's vote count by 1 in question collection.
            let que = await questionCollection.findOne({ _id: option.question })
            let options = que.options
            let idx = options.findIndex((option) => { return option.idd == optionIdd })
            options[idx].votes_Count = option.votes_Count;

            que.markModified('options'); // save method is not working and not able to check that any thing is changed in db so we have to use this to mark that something changed in db, here is deeply nesting so save method is not able to identify that any thing is modified.
            que.save();
            // console.log(que);
            res.status(200).send("vote added Successfully.");
        } else {
            res.status(404).send("option not found.")
        }
    } catch (error) {
        res.status(500).json({
            message: " Error in voting to Option"
        })
        console.log(" Error in Voting to Option, Server side Error ", error);
    }

}