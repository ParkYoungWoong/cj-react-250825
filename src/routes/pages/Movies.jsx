import TextField from '@/components/TextField.jsx'
import Button from '@/components/Button.jsx'
import Loader from '@/components/Loader.jsx'
import { useState } from 'react'
import { Link, Outlet } from 'react-router'

export default function Movies() {
  const [searchText, setSearchText] = useState('')
  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  async function fetchMovies() {
    setIsLoading(true)
    const res = await fetch(
      `https://omdbapi.com?apikey=7035c60c&s=${searchText}`
    )
    const { Search } = await res.json()
    setMovies(Search)
    setIsLoading(false)
  }

  return (
    <>
      <div className="grid grid-cols-[400px_100px] gap-[10px]">
        <TextField
          value={searchText}
          onChange={e => setSearchText(e.target.value)}
          onKeyDown={e => {
            if (e.key === 'Enter') {
              fetchMovies()
            }
          }}
        />
        <Button onClick={fetchMovies}>검색</Button>
      </div>
      <ul>
        {movies.map(movie => {
          return (
            <li key={movie.imdbID}>
              <Link to={`/movies/${movie.imdbID}`}>
                {movie.Title}({movie.Year})
              </Link>
            </li>
          )
        })}
      </ul>
      {isLoading && <Loader fixed />}
      <Outlet />
    </>
  )
}

// http://localhost:5173/movies/tt1234567
