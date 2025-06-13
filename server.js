const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

// Routes
const candidateRoutes = require("./server/routes/candidateRoutes");
const interviewerRoutes = require("./server/routes/interviewerRoutes");
const interviewRoutes = require("./server/routes/interviewRoutes");

// Connect routes to the app
app.use("/api/candidates", candidateRoutes);
app.use("/api/interviewers", interviewerRoutes);
app.use("/api/interviews", interviewRoutes);

// DB connection and server start
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB connected");
        app.listen(5000, () => console.log("Server running on port 5000"));
    })
    .catch(err => console.log(err));
