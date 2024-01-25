
import express from "express";
import createQuestion from "../controller/createQuestion.js"
import createOption from "../controller/createOption.js"
import showQuestion from "../controller/showQuestions.js"
import questionDelete from "../controller/questionDelete.js"

let router= express.Router();

router.post("/create", createQuestion)
router.get("/:queId", showQuestion)
router.get("/:queId/delete", questionDelete);
router.post("/:queId/options/create", createOption);

export default router;