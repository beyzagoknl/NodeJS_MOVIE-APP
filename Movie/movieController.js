const movieService = require("./movieDAO");

const getMovies = function (done) {
  movieService.getMovies(done);
};

const getMovieById = function (movieId, done) {
  movieService.getMovieById(movieId, done);
};
const updateMoviedetails = function (
  movieId,
  movieName,
  director,
  release_date,
  done
) {
  movieService.updateMoviedetails(
    movieId,
    movieName,
    director,
    release_date,
    done
  );
};
const deleteMoviedetails = function (movieId, done) {
  movieService.deleteMoviedetails(movieId, done);
};
const createMoviedetails = function (
  movieId,
  movieName,
  director,
  release_date,
  done
) {
  movieService.createMoviedetails(
    movieId,
    movieName,
    director,
    release_date,
    done
  );
};

module.exports = {
  getMovies,
  getMovieById,
  updateMoviedetails,
  deleteMoviedetails,
  createMoviedetails,
};
