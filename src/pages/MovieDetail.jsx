import React from 'react'
import styled from 'styled-components'
import { useGetMovies } from '../hooks/useGetMovies'
import Loader from '../components/loader/Loader'

const MovieDetail = ({match}) => {
  const [movie, setMovie] = React.useState({})
  const {data, loading} = useGetMovies(match.params.id)
  React.useEffect(() => {
    if (data.length !== 0) {
      const [normalizeData] = data
      setMovie(normalizeData)
    }
  }, [data])
  const visibleItem = () => {
    return <>
      <HeadLine>
      <h2>{ movie.title }</h2>
      <img src={ movie.mainImg } alt={ movie.title }/>
    </HeadLine>
    <Awards>
      {
        movie.awards.map((award) => <Award
          key={ award.title }
          title={ award.title }
          description={ award.description }
        />)
      }
    </Awards>
    <ImageDisplay><img src={ movie.secondaryImg } alt={ movie.title }/></ImageDisplay></>

  }


  return (
    <Details>
      {
        loading ? <Loader/> : <>{ visibleItem() }</>
      }
    </Details>
  )
}
const Details = styled.div`
  color: white;
`
const HeadLine = styled.div`
  min-height: 90vh;
  padding-top: 20vh;
  position: relative;

  h2 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
  }

  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`
const Awards = styled.div`
  min-height: 80vh;
  display: flex;
  margin: 5rem 10rem;
  align-items: center;
  justify-content: space-around;
`
const AwardStyle = styled.div`
  padding: 5rem;

  h3 {
    font-size: 2rem;
  }

  .line {
    width: 100%;
    background: #23d997;
    height: 0.5rem;
    margin: 1rem 0;
  }

  p {
    padding: 2rem 0;
  }
`
const ImageDisplay = styled.div`
  min-height: 50vh;

  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`
const Award = ({title, description}) => {
  return (
    <AwardStyle>
      <h3>{ title }</h3>
      <div className='line'/>
      <p>{ description }</p>
    </AwardStyle>
  )
}

export default MovieDetail

