const mongoose = require('mongoose');

const interviewerSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    department: String
});

module.exports = mongoose.models.Interviewer || mongoose.model('Interviewer', interviewerSchema);
