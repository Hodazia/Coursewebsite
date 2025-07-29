/*
Have a feedback route from the frontend {name,email,query/feedback}
and send it to the backend, use a nodemailer api to receive the 
query from the user from the form and send an acknowledgement emil

*/

const express = require("express");
const feedback = require("../controllers/feedback.controller")
const router = express.Router();
router.post("/contact-sendquery",feedback.feedback_contr);
module.exports = router;