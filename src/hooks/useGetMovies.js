import React from 'react'
import { MovieState } from '../movieState'

const getMovies = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(MovieState)
    }, 350)
  })
}
const getMovieById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = MovieState.find((movie) => +movie.id === +id)
      resolve([data])
    }, 350)
  })
}

export const useGetMovies = (id) => {
  const [data, setData] = React.useState([])
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState(null)

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const data = id ? await getMovieById(id) : await getMovies()
        setData(data)
      } catch (e) {
        setError(e.message)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [id])

  return {
    data,
    loading,
    error,
  }
}
