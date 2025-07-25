const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  courseName: { 
    type: String, 
    required: true,
    trim: true 
  },
  courseDescription: { 
    type: String, 
    required: true,
    trim: true 
  },
  instructor: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  whatYouWillLearn: { 
    type: String, 
    required: true 
  },
  courseContent: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Section",
    },
  ],
  ratingAndReviews: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "RatingAndReview",
    },
  ],
  price: { 
    type: Number, 
    required: true 
  },
  thumbnail: { 
    type: String, 
    required: true 
  },
  // FIX: Change this from ObjectId array to String array
  tag: { 
    type: [String], 
    required: true 
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
  studentsEnrolled: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  instructions: { 
    type: [String] 
  },
  status: {
    type: String,
    enum: ["Draft", "Published"],
    default: "Draft",
  },
  createdAt: { 
    type: Date, 
    default: Date.now 
  },
}, {
  timestamps: true
});

module.exports = mongoose.model("Course", courseSchema);