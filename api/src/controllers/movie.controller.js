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

const getMovies = async (req, res) => {
  try {
    const movies = await Movie.find();
    return res.json(movies);
  } catch (error) {
    res.status(400).send(error)
  }
}

const postMovie = async (req, res) => {
  try {
    const { dates, functionDays, times, date, price, title, poster, description, genre, onBillboard, cast, trailer, rated, runtime, director } = req.body;
    
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    const shows = [];
    const startDate = new Date (dates[0].year, dates[0].month-1, dates[0].day);
    const finishDate = new Date (dates[1].year, dates[1].month-1, dates[1].day);
    for ( i = startDate; i <= finishDate; i.setDate(i.getDate() + 1)){
        let day = days[i.getDay()];
        if(functionDays.includes(day)){
          let date = new Date(i)
          let time = times.map(
            e => e = {[e] : [
            {"slot":"A1","ocuppied":false},
            {"slot":"A2","ocuppied":false},
            {"slot":"A3","ocuppied":false},
            {"slot":"A4","ocuppied":false},
            {"slot":"A5","ocuppied":false},
            {"slot":"A6","ocuppied":false},
            {"slot":"A7","ocuppied":false},
            {"slot":"A8","ocuppied":false},
            {"slot":"A9","ocuppied":false},
            {"slot":"A10","ocuppied":false},
            {"slot":"B1","ocuppied":false},
            {"slot":"B2","ocuppied":false},
            {"slot":"B3","ocuppied":false},
            {"slot":"B4","ocuppied":false},
            {"slot":"B5","ocuppied":false},
            {"slot":"B6","ocuppied":false},
            {"slot":"B7","ocuppied":false},
            {"slot":"B8","ocuppied":false},
            {"slot":"B9","ocuppied":false},
            {"slot":"B10","ocuppied":false},
            {"slot":"C1","ocuppied":false},
            {"slot":"C2","ocuppied":false},
            {"slot":"C3","ocuppied":false},
            {"slot":"C4","ocuppied":false},
            {"slot":"C5","ocuppied":false},
            {"slot":"C6","ocuppied":false},
            {"slot":"C7","ocuppied":false},
            {"slot":"C8","ocuppied":false},
            {"slot":"C9","ocuppied":false},
            {"slot":"C10","ocuppied":false}
          ]}
        )
          shows.push({date, day, price, time})
        }
    }

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
  res.send(movieSaved)
  } catch (error) {
    res.status(400).send(error)
  }
}

const putMovie = async (req, res) => {
  try {
    const { title, date, poster, description, genre, onBillboard, shows, cast, trailer, rated, runtime, director } = req.body;
    const newMovie = ({
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
  await Movie.findByIdAndUpdate(req.params.id, newMovie);
  console.log(newMovie);
  res.json({status: 'Movie Updated'})
  } catch (error) {
    res.status(400).send(error)
  }
}

module.exports = {
  getMovieById,
  getMovies,
  postMovie,
  putMovie,
};
