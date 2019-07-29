import React, { Component } from 'react';
import Card from './Card';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { fetchTestData, getMovieByImbdID } from '../actions/directoryActions'

const DirectoryContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 100%;
`;

class Directory extends Component {
  componentDidMount = () => {
    this.props.fetchTestData();
  }

  render() {
    return (
      <DirectoryContainer>
        {this.props.movies.map(movie => (
          <Card 
            movie={ movie }
            // onClick={ this.props.getMovieByImbdID() }
          />
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