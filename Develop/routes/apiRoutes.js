const app = require("express").Router();
const Workout = require("../models")

app.post("/submit", ({ body }, res) => {
  db.Book.create(body)
    .then(({ _id }) =>
      db.Library.findOneAndUpdate({}, { $push: { books: _id } }, { new: true })
    )
    .then((dbLibrary) => {
      res.json(dbLibrary);
    })
    .catch((err) => {
      res.json(err);
    });
});

app.get("/books", (req, res) => {
  db.Book.find({})
    .then((dbBook) => {
      res.json(dbBook);
    })
    .catch((err) => {
      res.json(err);
    });
});

app.get("/library", (req, res) => {
  db.Library.find({})
    .then((dbLibrary) => {
      res.json(dbLibrary);
    })
    .catch((err) => {
      res.json(err);
    });
});

app.put("/populated", (req, res) => {
  db.Library.find({})
    .populate("books")
    .then((dbLibrary) => {
      res.json(dbLibrary);
    })
    .catch((err) => {
      res.json(err);
    });
});

app.delete("/populated", (req, res) => {
    db.Library.find({})
      .populate("books")
      .then((dbLibrary) => {
        res.json(dbLibrary);
      })
      .catch((err) => {
        res.json(err);
      });
  });

module.exports = app;