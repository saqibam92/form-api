const Participant = require("../models/Participant");

const createParticipant = async (req, res) => {
  try {
    const participant = new Participant(req.body);
    await participant.save();
    res.status(201).json(participant);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  createParticipant,
};
