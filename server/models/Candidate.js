const mongoose = require('mongoose');

const candidateSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  resumeLink: String
});

//  Only define the model if it hasn't been compiled
module.exports = mongoose.models.Candidate || mongoose.model('Candidate', candidateSchema);
