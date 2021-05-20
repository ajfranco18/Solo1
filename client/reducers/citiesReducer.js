import * as types from '../constants/actionTypes';

const initialState = {
    income: 0,
    environment: '',
    city: '',
  };

  const citiesReducer = (state = initialState, action) => {
      switch (action.type) {
        //   case types.SET_INCOME:
        //     const newIncome = state.income + action.payload;
            
        //     return {
        //         ...state,
        //         income: newIncome
  
        //     }

            // case types.SET_ENVIRONMENT:
            // const newEnv = state.environment + action.payload;
            
            // return {
            //     ...state,
            //     environment: newEnv
  
            // }

            case types.GET_CITY:
            const newCity = state.city + 'Lisbon, Portugal';
            
            return {
                ...state,
                city: newCity
  
            }
            default: return state;  
            }
        
      };
      export default citiesReducer;
  