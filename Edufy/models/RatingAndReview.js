const mongoose = require("mongoose");

const ratingAndReviewSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },
    review: {
      type: String,
      required: true,
      trim: true,
    },
    course: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Course",
    },
  },
  { timestamps: true }
);

// Create compound index to ensure one review per user per course
ratingAndReviewSchema.index({ user: 1, course: 1 }, { unique: true });

module.exports = mongoose.model("RatingAndReview", ratingAndReviewSchema);