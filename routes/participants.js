const express = require("express");
const { createParticipant } = require("../controllers/participantController");

const router = express.Router();

router.post("/", createParticipant);

module.exports = router;
