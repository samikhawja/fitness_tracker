const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  exercises: [{
    name: {
      type: String,
      trim: true
    },
    type: {
      type: String,
      trim: true
    },
    duration: {
      type: Number
    },
    weight: {
      type: Number
    },
    sets: {
      type: Number
    },
    reps: {
      type: Number
    },
    distance: {
      type: Number
    },
  }],
  totalDuration: {
    type: Number,
    default: 0
  }
});

WorkoutSchema.methods.td = function() {
  this.totalDuration = this.exercises.duration;
  return this.totalDuration
};

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;