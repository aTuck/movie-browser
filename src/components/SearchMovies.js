import React, { Component } from 'react'
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { searchMovieByTitle } from '../actions/directoryActions'

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

const SearchSubmitButton = styled.button`
  flex: 1 30%
  font-size: 16px;
  background: linear-gradient(to right,#ff8a00,#da1b60);
  border: none;
  padding: 7px 12px;
  cursor: pointer;
  border-radius: 15px
  color: #fff
  font-weight: 700;
  font-family: 'Monteserrat', sans-serif; 

  :hover {
    transform: translate(0px, -1px);
  }

  :active, :focus {
    outline: none;
  }
`;

class SearchMovies extends Component {
  state = {
    title: ''
  }
  
  onSubmit = (e) => {
    e.preventDefault();
    this.props.searchMovieByTitle(this.state.title);
    // this.setState({ title: '' })
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
    document.title = `Searching: ${e.target.value}`;
  }

  render() {
    return (
      <SearchForm onSubmit={this.onSubmit}>
        <SearchTextBox 
          type="text" 
          name="title"
          placeholder="Type a movie title"
          autoComplete="off"
          value={this.state.title}
          onChange={this.onChange}
        />
        {/* <SearchSubmitButton
          type="submit" 
          value="Submit"
          className="btn"
        > Search </SearchSubmitButton> */}
      </SearchForm>
    )
  }
}

SearchMovies.propTypes = {
  searchMovieByTitle: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  data: state.directory.movies
});

const mapDispatchToProps = {
  searchMovieByTitle,
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchMovies);