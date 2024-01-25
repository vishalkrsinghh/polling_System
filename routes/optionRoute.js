
import express from "express";
import optionVote from "../controller/optionVote.js"
import optionDelete from "../controller/optionDelete.js"

let router= express.Router();

router.get("/:optionIdd/add_vote",optionVote);
router.get("/:optionId/delete", optionDelete)

export default router;