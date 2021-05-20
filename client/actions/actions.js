// import actionType constants
import * as types from '../constants/actionTypes';

//Action creator function to get a city
export const setIncome = (income) => ({
  type: types.SET_INCOME,
  payload: income
});

export const setEnvironment = (environment) => ({
    type: types.SET_ENVIRONMENT,
    payload: environment
  });

  export const getCity = (city) => ({
    type: types.GET_CITY,
    payload: city
  });

