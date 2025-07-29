const express = require("express");
const ai_controller= require("../controllers/contoller.ai")
const router = express.Router();

router.post("/get-review",ai_controller.code_ai_review);
module.exports = router