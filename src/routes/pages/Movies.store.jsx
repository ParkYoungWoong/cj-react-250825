import TextField from '@/components/TextField.jsx'
import Button from '@/components/Button.jsx'
import Loader from '@/components/Loader.jsx'
import { Link, Outlet } from 'react-router'
import { useMovieStore } from '@/stores/movie'

export default function Movies() {
  // useMovieStore(state => { return state.searchText })
  const searchText = useMovieStore(state => state.searchText)
  const setSearchText = useMovieStore(state => state.setSearchText)
  const movies = useMovieStore(state => state.movies)
  const isLoading = useMovieStore(state => state.isLoading)
  const fetchMovies = useMovieStore(state => state.fetchMovies)

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
