import React from 'react'
import styled from 'styled-components'

const AboutP = styled.p`
  font-family: 'Montesserat', sans-serif;
  font-size: 18px;
  text-align: center;
  margin-top: 25px;
  line-height: 24px;
`;

export default function About() {
  return (
    <React.Fragment>
      <AboutP>This is a Movie Browser app v1.0.0. It uses the oMDB API.</AboutP>
    </React.Fragment>
  )
}
