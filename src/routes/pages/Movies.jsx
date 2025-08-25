import TextField from '@/components/TextField.jsx'
import Button from '@/components/Button.jsx'
import { useState } from 'react'

export default function Movies() {
  const [searchText, setSearchText] = useState('')
  const [movies, setMovies] = useState([])

  async function fetchMovies() {
    const res = await fetch(
      `https://omdbapi.com?apikey=7035c60c&s=${searchText}`
    )
    const { Search } = await res.json()
    setMovies(Search)
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
      <ul></ul>
    </>
  )
}
