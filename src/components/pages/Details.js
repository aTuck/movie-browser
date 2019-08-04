import React, { Component, useEffect } from 'react'
import styled from 'styled-components'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { getMovieByImbdID } from '../../actions/detailsActions'

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 40%;
  padding: 40px;
`;

const BackgroundPoster = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background: url(${props => props.bgImage}) no-repeat;
  background-size: cover;
  background-position: center;
  z-index: -1;
  filter: blur(70px);
`;

const MainDetailsCard = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 60%;
  height: 35%;
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
  justify-content: flex-start;
  align-items: flex-end;
`;

const Title = styled.h1`
  font-size: 6rem;
  line-height: 72px;
  letter-spacing: -4px;
  font-weight: 800;
  text-transform: capitalize;
  font-stretch: 100%;
  max-width: 70%;
`;

const Released = styled.span`
  font-size: 2rem;
  color: #0f0f0f;
  font-style: italic;
`;

const Plot = styled.p`
  line-height: 24px;
  font-size: 1rem;
  margin-top: 35px;
`;
const Poster = styled.img`
  top: 5%;
  left: 5%;
  position: absolute;
  border-radius: 25px;
  box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
`;

const DetailsP = styled.p`
  margin-top: 25px;
`;
const Details = props => {
    useEffect(() => {
      props.getMovieByImbdID(props.match.params.id) 
    }, [])

    return(
      <DetailsContainer>
        <BackgroundPoster bgImage={props.movie.Poster} />
        <Poster src={props.movie.Poster} />
        <HeaderContainer>
          <MainDetailsCard>
            <TitleContainer>
              <Title>{props.movie.Title}</Title>
              &nbsp;&nbsp;
              <Released>({props.movie.Released})</Released>
            </TitleContainer>
            <Plot>{props.movie.Plot}</Plot>
            <p>Directed By: {props.movie.Director}</p>
            <p>Written By: {props.movie.Writer}</p>
            <span>{props.movie.Rated}</span>
          </MainDetailsCard>
        </HeaderContainer>
        <AdditionalDetailsContainer>
          <DetailsP>Actors: {props.movie.Actors}</DetailsP>
          <DetailsP>{props.movie.Genre}</DetailsP>
          <DetailsP>{props.movie.Runtime}</DetailsP>
          <DetailsP>Language: {props.movie.Language}</DetailsP>
          {/* <p>{props.movie.Ratings}</p> */}
          <DetailsP>{props.movie.Metascore}</DetailsP>
          <DetailsP>{props.movie.imdbRating}</DetailsP>
          <DetailsP>{props.movie.imdbVotes}</DetailsP>
          <DetailsP>{props.movie.Type}</DetailsP>
          <DetailsP>{props.movie.DVD}</DetailsP>
          <DetailsP>{props.movie.BoxOffice}</DetailsP>
          <DetailsP>{props.movie.Production}</DetailsP>
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
