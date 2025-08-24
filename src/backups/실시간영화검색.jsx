import { useState, useEffect, useCallback } from 'react'
import { debounce } from 'lodash-es'

export default function App() {
  const [movies, setMovies] = useState([])
  const [searchText, setSearchText] = useState('')

  // useEffect(실행할함수, 의존성배열)
  useEffect(() => {
    debouncedFetchMovies
  }, [searchText])

  const debouncedFetchMovies = useCallback(debounce(fetchMovies, 700), [
    searchText
  ])

  async function fetchMovies() {
    if (searchText.length < 3) return
    const res = await fetch(
      `https://omdbapi.com?apikey=7035c60c&s=${searchText}`
    )
    const data = await res.json()
    setMovies(data.Search || [])
  }

  return (
    <>
      <input
        type="text"
        value={searchText}
        onChange={e => setSearchText(e.target.value)}
      />
      <ul>
        {movies.map(movie => {
          return <li key={movie.imdbID}>{movie.Title}</li>
        })}
      </ul>
    </>
  )
}
