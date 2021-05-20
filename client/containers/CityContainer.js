import React, { Component } from 'react';
import { connect } from 'react-redux';
// import * as actions from '../actions/actions';


// import child components...
import CityDisplay from '../components/CityDisplay.js';

const mapStateToProps = state => ({
    // provide pertinent state here
    // income: state.cities.income,
    // environment: state.cities.environment,
    city: state.cities.city
      
  });

  

  class CityContainer extends Component {
    constructor(props) {
      super(props);
    }

    render() {
        return(
          <div>
            <h2>City</h2>
            <CityDisplay city={this.props.city}/>
          </div>
        );
      }
    }


    export default connect(mapStateToProps, null)(CityContainer);