const express = require('express');
const router = express.Router();
const {
    createInterview,
    getAllInterviews,
    updateInterview,
    deleteInterview
} = require('../utils/controllers/interviewController');

router.post('/', createInterview);
router.get('/', getAllInterviews);
router.put('/:id', updateInterview);
router.delete('/:id', deleteInterview);

module.exports = router;
