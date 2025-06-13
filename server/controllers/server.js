const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());


// Routes
const candidateRoutes = require("./routes/candidateRoutes");
const interviewerRoutes = require("./routes/interviewerRoutes");
const interviewRoutes = require("./routes/interviewRoutes");

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(5000, () => console.log("Server running on port 5000"));
  })
  .catch(err => console.log(err));