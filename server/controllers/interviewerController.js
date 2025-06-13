const Interviewer = require('../models/Interviewer');

// Create Interviewer
exports.createInterviewer = async (req, res) => {
    try {
        const interviewer = new Interviewer(req.body);
        await interviewer.save();
        res.status(201).json(interviewer);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get All Interviewers
exports.getAllInterviewers = async (req, res) => {
    try {
        const interviewers = await Interviewer.find();
        res.json(interviewers);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
