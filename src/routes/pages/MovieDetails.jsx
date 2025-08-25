// http://localhost:5173/movies/tt1877830
import { useParams } from 'react-router'
import { useState, useEffect } from 'react'
import Loader from '@/components/Loader.jsx'

export default function MovieDetails() {
  const { movieId } = useParams()
  const [movie, setMovie] = useState()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetchMovie()
  }, [])

  async function fetchMovie() {
    const res = await fetch(`https://omdbapi.com?apikey=7035c60c&i=${movieId}`)
    const movie = await res.json()
    setMovie(movie)
    setIsLoading(false)
  }

  return (
    <>
      {movie && (
        <div>
          <h1>{movie.Title}</h1>
          <p>{movie.Plot}</p>
          <img
            src={movie.Poster.replace('SX300', 'SX1000')}
            alt={movie.Title}
          />
        </div>
      )}
      {isLoading && <Loader fixed />}
    </>
  )
}
