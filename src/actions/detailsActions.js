import {
  POPULATE_DETAILS_BEGIN,
  POPULATE_DETAILS_SUCCESS,
  // POPULATE_DETAILS_FAILURE,
} from './types';

// TODO: Import this from config somewhere
const API_KEY = 56368032

export const getMovieByImbdID = id => async dispatch => {
  const result = await fetch(`http://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`)
  // .then(res => {
  if (result.status !== 200) {
    return
  }
  const data = await result.json();
  dispatch({
    type: POPULATE_DETAILS_SUCCESS,
    payload: data
  })
  // return res.json()
  // })
  // .then(data => {
  //   dispatch({
  //     type: POPULATE_DETAILS_SUCCESS,
  //     payload: data
  //   })
  // })
  dispatch({
    type: POPULATE_DETAILS_BEGIN,
  })
}
