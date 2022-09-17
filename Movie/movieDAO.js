const fs = require("fs");
const getMovies = function (done) {
  fs.readFile("Movie/movies.json", (err, fileContent) => {
    if (err) {
      return done("Encountered error while getting movies details");
    }
    let movieData = JSON.parse(fileContent);
    return done(undefined, movieData);
  });
};
const getMovieById = function (movieId, done) {
  fs.readFile("Movie/movies.json", (err, fileContent) => {
    if (err) {
      return done("Encountered error while getting movies details");
    }
    let userData = JSON.parse(fileContent);
    const fetchedMovies = userData.find((m) => m.movieId == movieId);
    if (fetchedMovies === undefined) {
      return done("No user found for requested movieId");
    }
    return done(undefined, fetchedMovies);
  });
};
const updateMoviedetails = function (
  movieId,
  movieName,
  director,
  release_date,
  done
) {
  fs.readFile("Movie/movies.json", (err, fileContent) => {
    if (err) {
      return done("Encountered error while getting users details");
    }
    let movieData = JSON.parse(fileContent);
    let index = movieData.findIndex((m) => m.movieId == movieId);
    if (index == -1) {
      return done("No movie found for requested movieId!!");
    }
    movieData[index].movieName = movieName;
    movieData[index].director = director;
    movieData[index].release_date = release_date;

    fs.writeFile(
      "Movie/newMovies.json",
      JSON.stringify(movieData),
      (err, updatedContent) => {
        if (err) {
          return done("Encountered error while updating movie details");
        }
        return done(undefined, "Succesfully updated movie details");
      }
    );
  });
};
const deleteMoviedetails = function (movieId, done) {
  fs.readFile("Movie/movies.json", (err, fileContent) => {
    if (err) {
      return done("Encountered error while getting movie details");
    }

    let movieData = JSON.parse(fileContent);
    let index = movieData.findIndex((m) => m.movieId == movieId);

    movieData = movieData.filter((m) => {
      return m !== movieData[index];
    });

    if (index == -1) {
      return done("No user found for requested userId!!");
    }
    fs.writeFile(
      "Movie/newMovies.json",
      JSON.stringify(movieData),
      (err, updatedContent) => {
        if (err) {
          return done("Encountered error while updating movie details");
        }
        return done(undefined, "Succesfully deleted movie details");
      }
    );
  });
};

const createMoviedetails = function (
  movieId,
  movieName,
  director,
  release_date,
  done
) {
  fs.readFile("Movie/movies.json", (err, fileContent) => {
    if (err) {
      return done("Encountered error while getting users details");
    }
    const movieData = JSON.parse(fileContent);

    if (!movieName || !director || !release_date) {
      return done(
        "There is missing data. Please be sure that you entered a movie name, director and release date"
      );
    }
    movieData.push({ movieId, movieName, director, release_date });

    fs.writeFile(
      "Movie/newMovies.json",
      JSON.stringify(movieData),
      (err, updatedContent) => {
        if (err) {
          return done("Encountered error while updating movie details");
        }
        return done(undefined, "Succesfully created movie details");
      }
    );
  });
};

module.exports = {
  getMovies,
  getMovieById,
  updateMoviedetails,
  deleteMoviedetails,
  createMoviedetails,
};
