const mongoose = require('mongoose');

const interviewSchema = new mongoose.Schema({
    candidate: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Candidate',
        required: true
    },
    interviewer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Interviewer',
        required: true
    },
    scheduledAt: {
        type: Date,
        required: true
    },
    status: {
        type: String,
        enum: ['scheduled', 'done', 'cancelled'],
        default: 'scheduled'
    }
}, { timestamps: true });

module.exports = mongoose.models.Interview || mongoose.model('Interview', interviewSchema);
