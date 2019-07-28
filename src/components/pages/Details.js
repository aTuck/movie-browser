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
      <AboutP>This is a details page of the movie browser app.</AboutP>
    </React.Fragment>
  )
}
