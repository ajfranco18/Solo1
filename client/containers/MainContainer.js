import React, { Component } from 'react';
import { connect } from 'react-redux';
// import actions from action creators file
import * as actions from '../actions/actions';
// import from child components...
import CityGenerator from '../components/CityGenerator.js';
import CityContainer from './CityContainer.js';


const mapStateToProps = state => ({
    // add pertinent state here
    income: state.cities.income,
    environment: state.cities.environment,
    city: state.cities.city
  });

  const mapDispatchToProps = dispatch => ({
    // create functions that will dispatch action creators
    setIncome: (event) => {
      dispatch(actions.setIncome(event.target.value));
    },
    setEnvironment: (event) => {
        dispatch(actions.setEnvironment(event.target.value));
    },

    getCity: (event) => {
      dispatch(actions.getCity(event.target.value));
  }
      });

  class MainContainer extends Component {
    constructor(props) {
      super(props);
    }

    render() {
        return (
        <div>
          <h1 id="header">Retire Abroad!</h1>
          <CityGenerator getCity={this.props.getCity} setIncome={this.props.setIncome} setEnvironment={this.props.setEnvironment}/>
          <CityContainer getCity={this.props.getCity} setIncome={this.props.setIncome} setEnvironment={this.props.setEnvironment}/>
        </div>
        );
    }
  }


export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);