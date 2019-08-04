import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import Card from './Card';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { fetchTestData, searchMovieByTitle } from '../actions/directoryActions'

const DirectoryContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  // width: 100%;
  height: 100%;
`;

const DetailsLink = styled(Link)`
  text-decoration: none;
  underline: none;
  color: #000;
`;

const NoResults = styled.p`
  font-size: 48px;
  margin: 25px 0px 25px 0px
  color: #1f1f1f;
`;

// const Directory = ({ location, ...props }) => {
class Directory extends Component {
  componentDidMount = () => {
    this.props.searchMovieByTitle(this.props.title);
  }

  render() {
    console.log("loading:"+this.props.loading);
    return (
      <DirectoryContainer>
        {this.props.loading ? null : 
          (this.props.movies.length > 0 ? this.props.movies.map(movie => (
            <DetailsLink 
              key={ movie.imdbID } 
              to={`/details/${movie.imdbID}`}>
              <Card
                movie={ movie }
              />
            </DetailsLink>
          )) : <NoResults>No results</NoResults>)}
      </DirectoryContainer>
    );
  }
}
Directory.propTypes = {
  movies: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({
  movies: state.directory.movies,
  loading: state.directory.loading
});

const mapDispatchToProps = {
  fetchTestData,
  searchMovieByTitle,
}

export default connect(mapStateToProps, mapDispatchToProps)(Directory);