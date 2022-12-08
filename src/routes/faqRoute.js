const { Router } = require("express");
const FAQController = require("../controllers/FAQController.js");
const router = Router();

router.get("/faq/", FAQController.getAllQuestions);

module.exports = router;
