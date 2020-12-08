import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useGetMovies } from '../hooks/useGetMovies'
import Loader from '../components/loader/Loader'

const OurWork = () => {
  const [movies, setMovies] = React.useState([])
  const {data, loading} = useGetMovies()
  React.useEffect(() => {
    setMovies(data)
  }, [data])

  const Movies = movies.map(({title, url, mainImg, id}, i) => {
    return <Movie key={ title + i }>
      <h2>{ title }</h2>
      <div className="line"/>
      <Link to={`/ourWork/${id}`}>
        <img src={ mainImg } alt={ title }/>
      </Link>
    </Movie>
  })

  return (
      <Work>
        {
          loading ? <Loader /> : <>{Movies}</>
        }
      </Work>
  )
}

const Work = styled.div`
  min-height: 100vh;
  overflow: hidden;
  padding: 2.5rem 5rem;

  h2 {
    padding: 1rem 0;
  }
`
const Movie = styled.div`
  padding-bottom: 5rem;

  .line {
    height: 0.3rem;
    background: #ccc;
    margin-bottom: 1.5rem;
  }

  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`

export default OurWork
