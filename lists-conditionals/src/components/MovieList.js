import { useState } from "react"
import moviesDataJSON from "../movies-data.json"
import MovieCard from "./MovieCard"

function MovieList() {
  const [movies, setMovies] = useState(moviesDataJSON)
  const [showMovies, setShowMovies] = useState(true)


  const deleteMovie = (movieId) => {
    const filteredMovies = movies.filter(movie => {
      return movie._id !== movieId
    })

    setMovies(filteredMovies)
  }

  const toggleShowMovies = () => {
    setShowMovies(!showMovies)
  }

  return (
    <div>
      <h2>Movie List</h2>
      
      <button onClick={toggleShowMovies}>{showMovies ? 'Hide' : 'Show'}</button>

      { showMovies && movies.map((movie) => {
        return (
          <>
            {/* <div className="MovieCard">
              <h3>{movie.title}</h3>
              <p>Director: {movie.director}</p>
              <p>Rating: {movie.IMDBRating}</p>
              <button onClick={() => deleteMovie(movie._id)} className="btn-delete">Delete 🗑</button>
            </div> */}

            <MovieCard key={movie._id} movie={movie} />
          </>
        )
      }) }
    </div>
  )
}

export default MovieList
