const app = require("express").Router();
const Workout = require("../models/Workout")

app.get("/api/workout", (req, res) => {
  Workout.find({})
    .sort({ date: -1 })
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

app.put("/api/workout/:id", (req, res) => {
  // db.Book.find({})
  //   .then((dbBook) => {
  //     res.json(dbBook);
  //   })
  //   .catch((err) => {
  //     res.json(err);
  //   });
});

app.post("/api/workout", ({ body }, res) => {
  Workout.insertMany(body)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

// app.get("/api/workout", (req, res) => {
//   Workout.find({})
//     .sort({ date: -1 })
//     .then(dbWorkout => {
//       res.json(dbWorkout);
//     })
//     .catch(err => {
//       res.status(400).json(err);
//     });
// });

module.exports = app;