import { 
  POPULATE_DIRECTORY_BEGIN,
  POPULATE_DIRECTORY_SUCCESS,
  POPULATE_DIRECTORY_FAILURE,
} from '../actions/types';

const initialState = {
  movies: [],
  loading: false,
  error: null
};

export default function(state = initialState, action) {
  // let newMovies = []
  switch (action.type){
    case POPULATE_DIRECTORY_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };
    case POPULATE_DIRECTORY_SUCCESS:
      console.log('received action')
      return {
        ...state,
        movies: action.payload,
        loading: false,
        error: null
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