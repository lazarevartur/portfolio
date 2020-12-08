import React from 'react'
import home1 from '../img/home1.png'
import { Description, Hide, Image, BasicLayout } from '../styles'
import styled from 'styled-components'

const AboutSection = () => {
  return (
    <About>
      <Description>
        <div className="title">
          <Hide>
            <h2>We work to make</h2>
          </Hide>
          <Hide>
            <h2>your <span>dreams</span> come</h2>
          </Hide>
          <Hide>
            <h2>true.</h2>
          </Hide>
        </div>
        <p>Contact us for any photography or videography ideas that you have. We
          have professionals with amazing skills to help you achieve it.</p>
        <button>Contact Us</button>
      </Description>
      <Image>
        {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */ }
        <img src={ home1 } alt='photo man'/>
      </Image>
    </About>
  )
}

const About = styled(BasicLayout)``

export default AboutSection
