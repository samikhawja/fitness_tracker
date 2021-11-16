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
  }]
});

WorkoutSchema.set('toJSON', { virtuals: true })

WorkoutSchema.virtual("totalDuration").get(function() {
  return this.exercises.reduce((totalDuration, workout) => {
    return totalDuration + workout.duration;
  }, 0);
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;