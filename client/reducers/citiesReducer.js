import * as types from '../constants/actionTypes';

const initialState = {
    income: '',
    environment: '',
    city: '',
  };

  const citiesReducer = (state = initialState, action) => {
      switch (action.type) {
          case types.SET_INCOME:
            
            return {
                ...state,
                income: action.payload
  
            }

            case types.SET_ENVIRONMENT:
            const newEnv = action.payload;
            
            return {
                ...state,
                environment: newEnv
  
            }

            case types.GET_CITY:
            
            let newCity = '';
            if(state.income === '< $2,500' && state.environment === 'City') newCity = "Monterrey, Mexico"
            if(state.income === '< $2,500' && state.environment === 'Beach') newCity = "Cartagena, Colombia"
            if(state.income === '< $2,500' && state.environment === 'Mountains') newCity = "Cuenca, Ecuador"
            if(state.income === '$2,500 to $3,500' && state.environment === 'City') newCity = "Lisbon, Portugal"
            if(state.income === '$2,500 to $3,500' && state.environment === 'Beach') newCity = "Guanacaste, Costa Rica"
            if(state.income === '$2,500 to $3,500' && state.environment === 'Mountains') newCity = "Cerro Azul, Panama"
            if(state.income === '> $3,500' && state.environment === 'City') newCity = "Madrid, Spain"
            if(state.income === '> $3,500' && state.environment === 'Beach') newCity = "Gozo, Malta"
            if(state.income === '> $3,500' && state.environment === 'Mountains') newCity = "Annecy, France"
            
            return {
                ...state,
                city: newCity
  
            }
            default: return state;  
            }
        
      };
      export default citiesReducer;
  