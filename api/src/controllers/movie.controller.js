const Movie = require("../models/Movie");

const getMovieById = async (req, res) => {
  try {
    const { id } = req.params;
    const movieFound = Movie.findById(id);
    return res.json(movieFound);
  } catch (error) {
    console.log(error);
  }
};

const getMovie = async (req, res) => {
  try {
    const movie = await Movie.find();
    res.json(movie);
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  getMovieById,
  getMovie,
};
