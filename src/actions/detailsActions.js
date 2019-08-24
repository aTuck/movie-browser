import {
  POPULATE_DETAILS_BEGIN,
  POPULATE_DETAILS_SUCCESS
  // POPULATE_DETAILS_FAILURE,
} from "./types";

// TODO: Import this from config somewhere
const API_KEY = 56368032;

export const getMovieByImbdID = id => dispatch => {
  fetch(`https://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`)
    .then(res => {
      if (res.status !== 200) {
        console.log(`Could not retrieve movie by ImdbID, status:${res.status}`);
        return;
      }
      return res.json();
    })
    .then(data => {
      dispatch({
        type: POPULATE_DETAILS_SUCCESS,
        payload: data
      });
    });
  dispatch({
    type: POPULATE_DETAILS_BEGIN
  });
};
