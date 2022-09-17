const { Router } = require("express");
const express = require("express");
const routes = express.Router();
const movieController = require("./movieDAO");
const { v4: uuidv4 } = require("uuid");

routes.get("/", (req, res) => {
  try {
    movieController.getMovies((err, results) => {
      if (err) {
        return res.status(404).send(err);
      }
      return res.status(200).send({ status: "OK", data: results });
    });
  } catch (err) {
    return res.status(500).send("Try after sometime");
  }
});
routes.get("/:movieid", (req, res) => {
  try {
    const movieId = req.params.movieid;
    movieController.getMovieById(movieId, (err, result) => {
      if (err) {
        return res.status(404).send(err);
      }
      return res.status(200).send({ status: "OK", data: result });
    });
  } catch (err) {
    return res.status(500).send("Unexpected error try later");
  }
});
routes.put("/:movieId", (req, res) => {
  try {
    const movieId = req.params.movieId;
    const movieName = req.body.movieName;
    const director = req.body.director;
    const release_date = req.body.release_date;
    movieController.updateMoviedetails(
      movieId,
      movieName,
      director,
      release_date,
      (err, results) => {
        if (err) {
          return res.status(400).send(err);
        }
        return res.status(201).send({ status: "OK", data: results });
      }
    );
  } catch {
    return res.status(500).send("Unexpected error try later");
  }
});
routes.delete("/:movieId", (req, res) => {
  try {
    const movieId = req.params.movieId;
    movieController.deleteMoviedetails(movieId, (err, results) => {
      if (err) {
        return res.status(404).send(err);
      }
      return res.status(200).send({ status: "OK", data: results });
    });
  } catch {
    return res.status(500).send("Unexpected error try later");
  }
});
routes.post("/", (req, res) => {
  try {
    const movieId = uuidv4();
    const movieName = req.body.movieName;
    const director = req.body.director;
    const release_date = req.body.release_date;
    movieController.createMoviedetails(
      movieId,
      movieName,
      director,
      release_date,
      (err, results) => {
        if (err) {
          return res.status(400).send(err);
        }
        return res.status(201).send({ status: "OK", data: results });
      }
    );
  } catch {
    return res.status(500).send("Unexpected error try later");
  }
});

module.exports = routes;
