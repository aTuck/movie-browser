import { combineReducers } from 'redux';
import directoryReducer from './directoryReducer';

export default combineReducers({
  directory: directoryReducer
});