const Participant = require("../models/Participant");

const createParticipant = async (req, res) => {
  try {
    const participant = new Participant(req.body);
    await participant.save();
    res.status(201).json(participant);
  } catch (error) {
    if (error.code === 11000) {
      // Duplicate key error code
      return res.status(400).json({ message: "Mobile Number Already in use" });
    }
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  createParticipant,
};
