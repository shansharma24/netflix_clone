import { featuredMovie, movies } from '../data/movies'
import MovieRow from '../components/MovieRow'

const Home = () => {
  const trendingNow = movies.slice(0, 6)
  const topRated = movies.slice(2, 8)
  const actionMovies = movies.filter(m => m.genre.includes("Action"))
  const scifiMovies = movies.filter(m => m.genre.includes("Sci-Fi"))
  const dramaMovies = movies.filter(m => m.genre.includes("Drama"))
  const comedyMovies = movies.filter(m => m.genre.includes("Comedy"))

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="relative h-[70vh] md:h-[80vh]">
        <img
          src={featuredMovie.image}
          alt={featuredMovie.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8">
          <div className="max-w-2xl">
            <h1 className="text-white text-3xl md:text-5xl font-bold mb-4">{featuredMovie.title}</h1>
            <p className="text-white text-sm md:text-base mb-6 line-clamp-3">{featuredMovie.description}</p>
            <div className="flex space-x-4">
              <button className="bg-white text-black px-6 py-2 md:px-8 md:py-3 rounded font-bold hover:bg-gray-300 transition">
                ▶ Play
              </button>
              <button className="bg-gray-700 bg-opacity-70 text-white px-6 py-2 md:px-8 md:py-3 rounded font-bold hover:bg-gray-600 transition">
                ℹ More Info
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Movie Rows */}
      <div className="space-y-4 md:space-y-8">
        <MovieRow title="Trending Now" movies={trendingNow} />
        <MovieRow title="Top Rated" movies={topRated} />
        <MovieRow title="Action Movies" movies={actionMovies} />
        <MovieRow title="Sci-Fi & Fantasy" movies={scifiMovies} />
        <MovieRow title="Drama Series" movies={dramaMovies} />
        <MovieRow title="Comedy" movies={comedyMovies} />
      </div>
    </div>
  )
}

export default Home
