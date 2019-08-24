import {
  POPULATE_DIRECTORY_BEGIN,
  POPULATE_DIRECTORY_SUCCESS,
  POPULATE_DIRECTORY_FAILURE
} from "../actions/types";

const initialState = {
  movies: [],
  loading: true,
  error: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case POPULATE_DIRECTORY_BEGIN:
      console.log("directory reducer doing POPULATE_DIRECTORY_BEGIN action");
      return {
        ...state,
        loading: true,
        error: null,
        movies: []
      };
    case POPULATE_DIRECTORY_SUCCESS:
      console.log("directory reducer doing POPULATE_DIRECTORY_SUCCESS action");
      return {
        ...state,
        loading: false,
        error: null,
        movies: action.payload || []
      };
    case POPULATE_DIRECTORY_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        movies: []
      };
    default:
      return state;
  }
}
