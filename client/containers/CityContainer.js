import React, { Component } from 'react';
import { connect } from 'react-redux';
// import * as actions from '../actions/actions';


// import child components...
// import CityDisplay from '../components/CityDisplay.js';

const mapStateToProps = state => ({
    // provide pertinent state here
    income: state.cities.income,
    environment: state.cities.environment,
    city: state.cities.city
      
  });

  

  class CityContainer extends Component {
    constructor(props) {
      super(props);
    }

    render() {
        return(
          
            
            <div id="city" className='display'>
              <h3>Your Recommended Retirement City:</h3>
        <label htmlFor="income">Income: </label>
        <span id="income">{this.props.income}</span>
        <p>
            <label htmlFor="enviroment"> Environment: </label>
            <span id="environment">{this.props.environment}</span>
        </p>
        <p>
            <label htmlFor="city"> Your City: </label>
            <span id="city">{this.props.city}</span>
        </p>
    </div>
          
        );
      }
    }


    export default connect(mapStateToProps, null)(CityContainer);