import { create } from 'zustand'

export const useMovieStore = create((set, get) => {
  return {
    searchText: '',
    movies: [],
    isLoading: false,
    fetchMovies: async () => {
      // setIsLoading(true)
      set({ isLoading: true })
      const { searchText } = get()
      const res = await fetch(
        `https://omdbapi.com?apikey=7035c60c&s=${searchText}`
      )
      const { Search } = await res.json()
      // setMovies(Search)
      // setIsLoading(false)
      set({
        movies: Search,
        isLoading: false
      })
    }
  }
})
