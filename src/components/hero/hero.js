import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './hero.css';
import {NavLink,withRouter} from 'react-router-dom';
import SearchForm from '../search-form/search-form';



class Hero extends Component {
  constructor(props) {
    super(props);

  }

  handleSelected() {
    
    
    localStorage.clear();
    //this.props.onLogout();
    //this.props.history.push('/');
  }

  render() {
    
    return (
      <section className="hero">
        <div className="hero-inner">
          <h1>Date Advisor</h1>
          <h2>Find the best places to eat, drink, buy or visit with your date in Costa Rica. </h2>
          <h2>Never before has it been so easy to plan a date</h2>
          <SearchForm/>
          {/*-- <button className="btnSearch">Search</button> */}
        </div>
      </section>
    );
    
  }
}
const mapStateToProps = (state) => {
  return {
    customer: state.customer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLogout: () => {
      dispatch({ type: 'LOGOUT_USER' });
    }
  };
};

Hero.propTypes = {
  userLogin: PropTypes.string,
  history: PropTypes.object,
  customer: PropTypes.string
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Hero));