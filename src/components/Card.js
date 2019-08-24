import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 400px;
  height: 200px;
  text-wrap: wrap;
  margin: 10px;
  background: #efefef;
  border-radius: 15px;
  cursor: pointer;
  transition: all 0.1s;
  animation: 0.3s ease-in 0s 1 fadeIn;
  
  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translate(0px, 3px);
    }
    100% {
      opacity: 100;
      transform: translate(0px, 0px);
    }
  }

  :hover {
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    transform: perspective(200px) translate3d(0px, 0px, 10px);
    img {
      transform: perspective(200px) translate3d(0px, 0px, 20px);
    }
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 14px;
  width: 65%;
`;

const TitleTextContainer = styled.div`
  display: -webkit-box;
  max-width: 400px;
  height: 140px;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const TitleText = styled.h2`
  font-size: 34px;
  line-height: 34px;
  letter-spacing: -2px;
  font-weight: 800;
  text-transform: capitalize;
  font-stretch: 100%;
  margin-bottom: 15px;
`;

const PosterContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 35%;
  overflow: visible;
  border-radius: 30px;
`;

const PosterImg = styled.img`
  width: 100%;
  transition: all 0.1s;
  border-radius: 15px;
`;

const Card = ({ Title, Poster, Year }) => {
  return (
    <CardContainer>
      <PosterContainer>
        <PosterImg src={Poster} alt="" height="100%" />
      </PosterContainer>
      <TextContainer>
        <TitleTextContainer>
          <TitleText>{Title}</TitleText>
        </TitleTextContainer>
        <strong>Released: {Year}</strong>
      </TextContainer>
    </CardContainer>
  );
};

Card.propTypes = {
  Title: PropTypes.string.isRequired,
  Poster: PropTypes.string.isRequired,
  Year: PropTypes.string.isRequired,
};

export default Card;
