const Movie = require("../models/Movie");

const getMovieById = async (req, res) => {
  try {
    const { id } = req.params;
    const movieFound = await Movie.findById(id);
    return res.json(movieFound);
  } catch (error) {
    console.log(error);
  }
};

const getMovie = async (req, res) => {
  try {
    const movies = await Movie.find();
    return res.json(movies);
  } catch (error) {
    res.status(400).send(error)
  }
}

const postMovie = async (req, res) => {
  try {
    const { title, date, poster, description, genre, onBillboard, shows, cast, trailer, rated, runtime, director } = req.body;
    const movie = await new Movie({
      title,
      date,
      poster,
      description,
      genre,
      onBillboard,
      shows,
      cast,
      trailer,
      rated,
      runtime,
      director  
  });
  const movieSaved = await movie.save();
  console.log(movie);
  res.send(movieSaved)
  } catch (error) {
    res.status(400).send(error)
  }
}

module.exports = {
  getMovieById,
  getMovie,
  postMovie,
};
