
import express from "express";
import optionVote from "../controller/optionVote.js"

let router= express.Router();

router.get("/:optionIdd/add_vote",optionVote);

export default router;