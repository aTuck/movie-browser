import React from "react";
import styled from "styled-components";

const AboutP = styled.p`
  font-family: "Montesserat", sans-serif;
  font-size: 18px;
  text-align: center;
  margin-top: 25px;
  line-height: 24px;
`;

const About = () => {
  return (
    <AboutP>
      This is Movie Browser app 1.0.0. It uses React/Redux and the oMDB API.
    </AboutP>
  );
};

export default About;
