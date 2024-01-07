class Movie {
  constructor(title, studio, rating = "PG") {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }
}

// a) Creating an instance of Movie with provided values
const movieInstance = new Movie("Inception", "Warner Bros.", "PG-13");
console.log("a) Movie instance:", movieInstance);

// b) Creating an instance of Movie with default rating
const defaultRatingMovie = new Movie("The Matrix", "Warner Bros.");
console.log("b) Movie instance with default rating:", defaultRatingMovie);

// c) Method to filter movies with "PG" rating
Movie.getPG = function(movies) {
  return movies.filter(movie => movie.rating === "PG");
};

const movieArray = [
  new Movie("Movie1", "Studio1", "PG"),
  new Movie("Movie2", "Studio2", "PG-13"),
  new Movie("Movie3", "Studio3", "R"),
 
];

const pgMovies = Movie.getPG(movieArray);
console.log("c) Movies with 'PG' rating:", pgMovies);

// d) Creating an instance of Movie with specific values
const casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");
console.log("d) Casino Royale instance:", casinoRoyale);
