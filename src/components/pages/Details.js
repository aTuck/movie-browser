import React, { Component, useEffect } from 'react'
import styled from 'styled-components'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { getMovieByImbdID } from '../../actions/detailsActions'
import silhouette from '../../images/silhouette.png'

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  height: 40%;
  padding: 40px;
  margin-bottom: 100px;
`;

const BackgroundPoster = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background: url(${props => props.bgImage}) no-repeat;
  background-size: cover;
  background-position: center;
  z-index: -1;
  filter: blur(40px);
`;

const MainDetailsCard = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 60%;
  height: 400px;
  border-radius: 25px;
  box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
  padding: 35px;
  background: #efefef;
  z-index: 1;
`;

const AdditionalDetailsContainer = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  padding: 50px;
  margin-top: 24rem;
  height: 100%;
  background: #fff;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const Title = styled.h1`
  font-size: 4rem;
  line-height: 56px;
  letter-spacing: -4px;
  font-weight: 800;
  text-transform: capitalize;
  font-stretch: 100%;
  margin-bottom: 15px;

  :after{
    content: '(${props => props.releasedate})';
    letter-spacing: 0px;
    font-weight: 200;
    font-size: 2rem;
    color: #434343;
    font-style: italic;
    margin-left: 15px;
    white-space: nowrap;
  }
`;

const Plot = styled.blockquote`
  line-height: 24px;
  font-size: 1.5rem;
  margin-left: 40px;
  margin-bottom: 10px;
  padding: 5px;
  position: relative;
  :before {
    font-family: "Arial";
    content: "\\201C";
    position: absolute;
    color: #00000070;
    font-size: 7rem;
    top: 20px;
    left: -35px; 
  }

`;
const Poster = styled.img`
  left: 5%;
  position: absolute;
  border-radius: 25px;
  box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
  width: 300px;
  height: 470px;
`;

const DetailsP = styled.p`
  margin-top: 25px;
`;

const MainDetailsTextContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const MainDetailsBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px;
  width: 33%;
`;

const MainDetailsHeader = styled.h2`
  font-size: 2rem;
  margin-bottom: 10px;
`;

const MainDetailsText = styled.p`
  font-weight: 700;
`;

const DetailsCardContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 80%;
  padding: 35px;
`;

const DetailsCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 25px;
  padding: 20px;
  margin-right: 20px;
  background: #efefef;
  z-index: 1;
`;

const AdditionalDetailsHeader = styled.h2`
  font-size: 3rem;
  font-weight: 700;
  margin-top: 50px;
`;

const DetailsCardImg = styled.img`
  height: 100px;
  width: 100px;
  margin-bottom: 10px;
`;

const DetailsCardText = styled.p`
  font-size: 1rem;
  font-weight: 700;
`;

const Details = props => {
    useEffect(() => {
      props.getMovieByImbdID(props.match.params.id) 
    }, [])

    return(
      <DetailsContainer>
        <BackgroundPoster bgImage={props.movie.Poster} />
        <HeaderContainer>
          <Poster src={props.movie.Poster} />
          <MainDetailsCard>
            <TitleContainer>
              <Title releasedate={props.movie.Released}>{props.movie.Title}</Title>
            </TitleContainer>
            <Plot>{props.movie.Plot}</Plot>
            <MainDetailsTextContainer>
              <MainDetailsBlock>
                <MainDetailsHeader>Directed By</MainDetailsHeader>
                <MainDetailsText>{props.movie.Director}</MainDetailsText>
              </MainDetailsBlock>
              <MainDetailsBlock>
                <MainDetailsHeader>Written By</MainDetailsHeader>
                <MainDetailsText>{props.movie.Writer}</MainDetailsText>
              </MainDetailsBlock>
              <MainDetailsBlock>
                <MainDetailsHeader>Rated</MainDetailsHeader>
                <MainDetailsText>{props.movie.Rated}</MainDetailsText>
              </MainDetailsBlock>
            </MainDetailsTextContainer>
          </MainDetailsCard>
        </HeaderContainer>
        <AdditionalDetailsContainer>
          
          <AdditionalDetailsHeader>Actors</AdditionalDetailsHeader>
          <DetailsCardContainer>
            {(props.movie.Actors) && props.movie.Actors.split(",").map(actorName => {
              return (
                <DetailsCard>
                <DetailsCardImg src={silhouette} alt=""/>
                <DetailsCardText>{actorName}</DetailsCardText>
                </DetailsCard>)
            })}
          </DetailsCardContainer>
          <AdditionalDetailsHeader>Ratings</AdditionalDetailsHeader>
          <DetailsCardContainer>{(props.movie.Ratings) && props.movie.Ratings.map(rating => {
            return (
              <DetailsCard>
                <DetailsCardText>{rating.Source}</DetailsCardText>
                <p>{rating.Value}</p>
                {(rating.Source === "Internet Movie Database") ? <p>Votes: {props.movie.imdbVotes}</p> : null}
              </DetailsCard>
            )
          })}</DetailsCardContainer>
          <AdditionalDetailsHeader>Extras</AdditionalDetailsHeader>
          <DetailsCardContainer>
            <DetailsCard>
              <DetailsCardText>Genre</DetailsCardText>
              <p>{props.movie.Genre}</p>
            </DetailsCard>
            <DetailsCard>
              <DetailsCardText>Runtime</DetailsCardText>
              <p>{props.movie.Runtime}</p>
            </DetailsCard>
            <DetailsCard>
              <DetailsCardText>Metascore</DetailsCardText>
              <p>{props.movie.Metascore}</p>
            </DetailsCard>
            <DetailsCard>
              <DetailsCardText>Metascore</DetailsCardText>
              <p>{props.movie.DVD}</p>
            </DetailsCard>
            <DetailsCard>
              <DetailsCardText>Box Office Revenue</DetailsCardText>
              <p>{props.movie.BoxOffice}</p>
            </DetailsCard>
            <DetailsCard>
              <DetailsCardText>Production Company</DetailsCardText>
              <p>{props.movie.Production}</p>
            </DetailsCard>
          </DetailsCardContainer>
        </AdditionalDetailsContainer>
      </DetailsContainer>
    )
} 

const mapStateToProps = state => ({
  movie: state.details.movie
})

const mapDispatchToProps = {
  getMovieByImbdID,
}

export default connect(mapStateToProps, mapDispatchToProps)(Details);
