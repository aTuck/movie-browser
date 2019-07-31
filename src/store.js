import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import rootReducer from './reducers'

const initialState = {}
const middleware = [thunk]
// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const store = createStore (
  rootReducer,
  initialState,
  // composeEnhancer(applyMiddleware(...middleware)),
  applyMiddleware(...middleware)
);

export default store