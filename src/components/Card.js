import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 400px;
  height: 200px;
  text-wrap: wrap;
  margin: 10px;
  background: #EFEFEF;
  border-radius: 15px;
  cursor: pointer;
  transition: all 0.15s;
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
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    transform: perspective(200px) translate3d(0px, 0px, 10px);
    img {
      transform: perspective(200px) translate3d(0px, 0px, 20px);
    }
  }
`;

const PosterContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 35%;
  overflow: hidden;
  border-radius: 15px 15px 15px 15px;
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

const TitleText = styled.p`
  font-family: 'Arial';
  font-size: 34px;
  line-height: 28px;
  letter-spacing: -2px;
  font-weight: 800;
  text-transform: capitalize;
  font-stretch: 100%;
  margin-bottom: 15px;
`;

const ReleasedText= styled.p`
`;

const PosterImg = styled.img`
  transition: all 0.15s;
`;

export default function Card(props) {
  // render() {
    // console.table(this.props.movie);
    const { Title, Poster, Year } = props.movie;
    return (
      <CardContainer onClick = { props.handleOnClick }>
        <PosterContainer>
          <PosterImg src={ Poster } alt="" height="100%"/>
        </PosterContainer>
        <TextContainer>
          <TitleTextContainer>
            <TitleText>{ Title }</TitleText>
          </TitleTextContainer>
          <ReleasedText>Released: { Year }</ReleasedText>  
        </TextContainer>
      </CardContainer>
    )
  }
// }

Card.propTypes = {
  movie: PropTypes.object.isRequired,
  handleOnClick: PropTypes.func.isRequired
}

// export default Card;
