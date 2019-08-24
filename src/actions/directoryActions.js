import {
  POPULATE_DIRECTORY_BEGIN,
  POPULATE_DIRECTORY_SUCCESS
  // POPULATE_DIRECTORY_FAILURE,
} from "./types";

// TODO: Import this from config somewhere
const API_KEY = 56368032;

export const fetchTestData = () => dispatch => {
  let testData = require("../assets/data/spider-man.json");
  testData = [
    testData,
    testData,
    testData,
    testData,
    testData,
    testData,
    testData,
    testData
  ];
  console.log(testData);
  dispatch({
    type: POPULATE_DIRECTORY_SUCCESS,
    payload: testData
  });
};

export const searchMovieByTitle = title => dispatch => {
  fetch(
    `https://www.omdbapi.com/?s=%22${title}%22&type=%22movie%22&apikey=${API_KEY}`
  )
    .then(res => {
      if (res.status !== 200) {
        console.log(`Could not search movies by title, status:${res.status}`);
        return;
      }
      return res.json();
    })
    .then(data => {
      dispatch({
        type: POPULATE_DIRECTORY_SUCCESS,
        payload: data.Search
      });
    });
  dispatch({
    type: POPULATE_DIRECTORY_BEGIN
  });
};
