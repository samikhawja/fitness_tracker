const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    //   date
    type: String,
    trim: true,
    required: "Username is Required"
  },

  exercises: [
    password: {
        type: String,
        trim: true,
        required: "Password is Required",
        validate: [({ length }) => length >= 6, "Password should be longer."]
      },
    
      email: {
        type: String,
        unique: true,
        match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
      },
    
      userCreated: {
        type: Date,
        default: Date.now
      },
  ],
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;