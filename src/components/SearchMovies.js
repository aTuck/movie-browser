import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import styled from "styled-components";
import PropTypes from "prop-types";

const SearchForm = styled.form`
  display: flex;
  align-items: start;
  justify-content: start;
  margin: 20px 0px 20px 0px
  width: 40%
`;

const SearchTextBox = styled.input`
  flex: 1 70%
  border: none;
  font-size: 96px;
  font-weight: 900;
  letter-spacing: -6px;
  line-height:1.15;
  autofill: false;
  height: 100%;
  
  :focus {
    outline: none;
  }
`;
const SearchMovies = props => {
  const [title, setTitle] = useState(props.title);

  return (
    <SearchForm
      onSubmit={() => (
        <Redirect to={{ pathname: "/search", search: `?title=${title}` }} />
      )}
    >
      <SearchTextBox
        type="text"
        name="title"
        placeholder="Type a movie title"
        autoComplete="off"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
    </SearchForm>
  );
};

SearchMovies.propTypes = {
  title: PropTypes.string.isRequired
};

export default SearchMovies;