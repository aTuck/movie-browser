import { 
  POPULATE_DETAILS_BEGIN,
  POPULATE_DETAILS_SUCCESS,
  POPULATE_DETAILS_FAILURE,
} from '../actions/types';

const initialState = {
  movie: {},
  loading: false,
  error: null
};

export default function(state = initialState, action) {
  switch (action.type){
    case POPULATE_DETAILS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };
    case POPULATE_DETAILS_SUCCESS:
      console.log('details reducer doing POPULATE_DETAILS_SUCCESS action');
      console.log(`details reducer paylod:${JSON.stringify(action.payload)}`)

      return {
        ...state,
        movie: action.payload,
        loading: false,
        error: null
      };
    case POPULATE_DETAILS_FAILURE:
      return {
        ...state,
        movie: {},
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
}