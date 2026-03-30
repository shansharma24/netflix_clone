import MovieCard from './MovieCard'

const MovieRow = ({ title, movies }) => {
  return (
    <div className="px-4 py-2 md:px-8 md:py-4">
      <h2 className="text-white text-xl md:text-2xl font-bold mb-2 md:mb-4">{title}</h2>
      <div className="flex space-x-2 md:space-x-4 overflow-x-auto scrollbar-hide">
        {movies.map((movie) => (
          <div key={movie.id} className="flex-shrink-0 w-40 md:w-48">
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default MovieRow
