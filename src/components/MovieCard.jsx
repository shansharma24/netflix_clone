import { useState } from 'react'

const MovieCard = ({ movie }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="relative cursor-pointer transition-transform duration-300 hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={movie.image}
        alt={movie.title}
        className="w-full h-32 object-cover rounded"
      />
      
      {isHovered && (
        <div className="absolute inset-0 bg-black bg-opacity-80 rounded p-2 flex flex-col justify-between">
          <div>
            <h3 className="text-white text-sm font-bold truncate">{movie.title}</h3>
            <p className="text-gray-300 text-xs mt-1 line-clamp-2">{movie.description}</p>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-yellow-400 text-xs">★ {movie.rating}</span>
            <span className="text-gray-400 text-xs">{movie.year}</span>
          </div>
        </div>
      )}
    </div>
  )
}

export default MovieCard
