import React, { Component, useEffect } from 'react'
import styled from 'styled-components'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { getMovieByImbdID } from '../../actions/detailsActions'

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const PrimaryDetailsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SecondaryDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Title = styled.h1`
  font-size: 96px;
  line-height: 86px;
  letter-spacing: -4px;
  font-weight: 800;
  text-transform: capitalize;
  font-stretch: 100%;
`;

const Poster = styled.img`
  padding: 15px;
  height: 100%;
  width: 30%;
`;

const Details = props => {
    useEffect(() => {
      props.getMovieByImbdID(props.match.params.id) 
    }, [])

    return(
      <DetailsContainer>
        <PrimaryDetailsContainer>
          <Poster src={props.movie.Poster} />
          <SecondaryDetailsContainer>
            <Title>{props.movie.Title}</Title>
            <p>{props.movie.Plot}</p>
            <p>Directed By: {props.movie.Director}</p>
            <p>Written By: {props.movie.Writer}</p>
            <p>Actors: {props.movie.Actors}</p>
            <span>Released: {props.movie.Released}</span>
            <span>{props.movie.Rated}</span>
          </SecondaryDetailsContainer>
        </PrimaryDetailsContainer>
        <span>{props.movie.Genre}</span>
        <span>{props.movie.Runtime}</span>
        <p>Language: {props.movie.Language}</p>
        {/* <p>{props.movie.Ratings}</p> */}
        <p>{props.movie.Metascore}</p>
        <p>{props.movie.imdbRating}</p>
        <p>{props.movie.imdbVotes}</p>
        <p>{props.movie.Type}</p>
        <p>{props.movie.DVD}</p>
        <p>{props.movie.BoxOffice}</p>
        <p>{props.movie.Production}</p>
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
