function MovieCard(props) {
  const { movie } = props

  return (
    <div className="MovieCard">
      <h3>{movie.title}</h3>
      <p>Director: {movie.director}</p>
      <p>Rating: {movie.IMDBRating}</p>

      {/* Conditional rendering: */}
      {/* If IMDB rating is higher than 9 display "Recommended!" */}
      {movie.IMDBRating > 8 && <p>Recommended movie ⭐</p>}

      {/* If movie has oscars display "Oscar Winner!", else display "No Oscar" */}
      {movie.hasOscars ? <p>This movie is an oscar winner 🏆</p> : <p>This movie has no oscar ☹️</p>}

      {/* We comment out the delete button for now, because the delete-function is not available in this component */}
      {/* <button onClick={() => deleteMovie(movie._id)} className="btn-delete">Delete</button> */}
    </div>
  )
}

export default MovieCard
