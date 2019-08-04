import { combineReducers } from 'redux';
import directoryReducer from './directoryReducer';
import detailsReducer from './detailsReducer';

export default combineReducers({
  directory: directoryReducer,
  details: detailsReducer,
});