import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import Card from './Card';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { fetchTestData, getMovieByImbdID } from '../actions/directoryActions'

const DirectoryContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 100%;
`;

const DetailsLink = styled(Link)`
  text-decoration: none;
  underline: none;
  color: #000;
`;

class Directory extends Component {
  componentDidMount = () => {
    this.props.fetchTestData();
  }

  render() {
    return (
      <DirectoryContainer>
        {this.props.movies.map(movie => (
          <DetailsLink to={`/details/${movie.imdbID}`}>
            <Card
              key={ movie.imdbID }
              movie={ movie }
            />
          </DetailsLink>
        ))}
      </DirectoryContainer>
    );
  }
}

Directory.propTypes = {
  movies: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({
  movies: state.directory.movies
});

const mapDispatchToProps = {
  fetchTestData,
  getMovieByImbdID,
}

export default connect(mapStateToProps, mapDispatchToProps)(Directory);