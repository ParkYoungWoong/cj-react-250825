import TextField from '@/components/TextField.jsx'
import Button from '@/components/Button.jsx'
import Loader from '@/components/Loader.jsx'
import { Link, Outlet } from 'react-router'
import { useMovieStore } from '@/stores/movie'
import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'

export default function Movies() {
  const [inputText, setInputText] = useState('')
  const searchText = useMovieStore(state => state.searchText)
  const setSearchText = useMovieStore(state => state.setSearchText)
  const { data: movies = [], isLoading } = useQuery({
    queryKey: ['movies', searchText],
    queryFn: async () => {
      const res = await fetch(
        `https://omdbapi.com?apikey=7035c60c&s=${searchText}`
      )
      const { Search } = await res.json()
      return Search
    },
    staleTime: 1000 * 60,
    enabled: Boolean(searchText)
  })

  function fetchMovies() {
    setSearchText(inputText)
  }

  return (
    <>
      <div className="grid grid-cols-[400px_100px] gap-[10px]">
        <TextField
          value={inputText}
          onChange={e => setInputText(e.target.value)}
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
