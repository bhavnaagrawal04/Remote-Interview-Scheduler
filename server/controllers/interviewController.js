const Interview = require('../models/Interview');
const sendEmail = require('../utils/email');
const Candidate = require('../models/Candidate');
const Interviewer = require('../models/Interviewer');

exports.createInterview = async (req, res) => {
  try {
    const interview = new Interview(req.body);
    await interview.save();

    const candidate = await Candidate.findById(interview.candidate);
    const interviewer = await Interviewer.findById(interview.interviewer);

    await sendEmail(
      candidate.email,
      "Interview Scheduled",
      `Hello ${candidate.name}, your interview with ${interviewer.name} is scheduled on ${new Date(interview.scheduledAt).toLocaleString()}.`
    );

    await sendEmail(
      interviewer.email,
      "Interview Scheduled",
      `Hello ${interviewer.name}, you have an interview with ${candidate.name} on ${new Date(interview.scheduledAt).toLocaleString()}.`
    );

    res.status(201).json(interview);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


exports.getAllInterviews = async (req, res) => {

};

exports.updateInterview = async (req, res) => {

};

exports.deleteInterview = async (req, res) => {

};
