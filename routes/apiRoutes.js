const app = require("express").Router();
const Workout = require("../models/Workout")

app.get("/api/workouts", async ({ body }, res) => {
  const workout = new Workout(body);
  workout.td();
  
  try{
    const newWorkout = await Workout.find({})
    .sort({ date: -1 })
    res.json(newWorkout);
    } catch(err){
    res.status(500).json(err);
  }
});

app.put("/api/workouts/:id", async ({ body, params }, res) => {
  try{
    const newWorkout = await Workout.findByIdAndUpdate(params.id, {$push: { "exercises": body } })
    res.json(newWorkout);
    } catch(err){
    res.status(500).json(err);
  }
});

app.post("/api/workouts", async ({ body }, res) => {
  try{
    const newWorkout = await Workout.create(body)
    res.json(newWorkout);
    } catch(err){
    res.status(500).json(err);
  }
});

app.get("/api/workouts/range", async ({ body }, res) => {
  const workout = new Workout(body);
  workout.td();
  
  try{
    const newWorkout = await Workout.find({})
    .sort({ date: -1 })
    res.json(newWorkout);
    } catch(err){
    res.status(500).json(err);
  }
});

module.exports = app;