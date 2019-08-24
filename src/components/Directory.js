import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Card from "./Card";
import PropTypes from "prop-types";
import styled from "styled-components";
import { fetchTestData, searchMovieByTitle } from "../actions/directoryActions";

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

const Spinner = ({ loading, children }) => {
  return loading ? <NoResults>Loading...</NoResults> : children;
};

const Directory = ({ loading, movies, title, searchMovieByTitle }) => {
  useEffect(() => {
    searchMovieByTitle(title);
    window.scrollTo(0, 0);
  }, [title]);

  return (
    <DirectoryContainer>
      <Spinner loading={loading}>
        {movies.length > 0 ? (
          movies.map(movie => (
            <DetailsLink key={movie.imdbID} to={`/details/${movie.imdbID}`}>
              <Card {...movie} />
            </DetailsLink>
          ))
        ) : (
          <NoResults>No results for '{title}'</NoResults>
        )}
      </Spinner>
    </DirectoryContainer>
  );
};

Directory.propTypes = {
  loading: PropTypes.bool.isRequired,
  movies: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  movies: state.directory.movies,
  loading: state.directory.loading
});

const mapDispatchToProps = {
  fetchTestData,
  searchMovieByTitle
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Directory);
