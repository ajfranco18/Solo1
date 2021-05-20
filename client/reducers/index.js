import { combineReducers } from 'redux';

// import all reducers here
import citiesReducer from './citiesReducer.js';


// combine reducers
const reducers = combineReducers({
  // if we had other reducers, they would go here
  cities: citiesReducer,
});

// make the combined reducers available for import
export default reducers;