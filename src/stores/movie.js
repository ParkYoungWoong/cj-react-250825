import { create } from 'zustand'
import { subscribeWithSelector } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

const userOrigin = {
  name: 'Neo',
  age: 22,
  contact: {
    address: {
      emails: ['neo@gmail.com', 'thesecon@gmail.com']
    }
  }
}

export const useMovieStore = create(
  subscribeWithSelector(
    immer((set, get) => {
      return {
        user: userOrigin,
        searchText: '',
        movies: [],
        isLoading: false,
        setFirstEmail: email => {
          set(state => {
            state.user.contact.address.emails[0] = email
          })
        },
        setSearchText: text => {
          set({ searchText: text })
        },
        fetchMovies: async () => {
          set({ isLoading: true })
          const { searchText } = get()
          const res = await fetch(
            `https://omdbapi.com?apikey=7035c60c&s=${searchText}`
          )
          const { Search } = await res.json()
          set({
            movies: Search,
            isLoading: false
          })
        }
      }
    })
  )
)

useMovieStore.subscribe(
  state => {
    return state.searchText
  },
  searchText => {
    console.log('searchText', searchText)
  }
)
