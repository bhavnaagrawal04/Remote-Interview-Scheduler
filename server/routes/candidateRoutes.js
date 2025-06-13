const express = require('express');
const router = express.Router();
const {
  createCandidate,
  getAllCandidates,
  deleteCandidate
} = require('../controllers/candidateController');

router.post('/', createCandidate);
router.get('/', getAllCandidates);
router.delete('/:id', deleteCandidate);

module.exports = router;
