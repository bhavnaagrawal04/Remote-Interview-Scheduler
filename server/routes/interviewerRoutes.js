const express = require('express');
const router = express.Router();
const {
    createInterviewer,
    getAllInterviewers
} = require('../controllers/interviewerController');

router.post('/', createInterviewer);
router.get('/', getAllInterviewers);

module.exports = router;
