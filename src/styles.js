import styled from 'styled-components'

export const BasicLayout = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2.5rem 5rem;
  color: white;
`

export const Description = styled.div`
  flex: 1;
  padding-right: 2.5rem;
  h2 {
    font-weight: lighter;
  }
`
export const Image = styled.div`
flex: 1;
  img {
    overflow: hidden;
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`

export const Hide = styled.div`
overflow: hidden;
`