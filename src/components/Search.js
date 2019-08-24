import React from "react";
import styled from "styled-components";
import SearchMovies from "./SearchMovies";
import Directory from "./Directory";

const SearchContainer = styled.div`
  padding: 35px;
`;

const Search = props => {
  const params = new URLSearchParams(props.location.search);
  const movieTitle = params.get("title");

  return (
    <SearchContainer>
      <SearchMovies title={movieTitle} />
      <Directory title={movieTitle} />
    </SearchContainer>
  );
};

export default Search;
