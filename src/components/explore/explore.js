import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './explore.css';
import {NavLink,withRouter} from 'react-router-dom';
import NavBar from '../nav-bar/nav-bar';
import Card from '../card/card';


class Explore extends Component {
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
      <div className="wrapper">
        <div className="nav-bar">
          <NavBar/>
        </div>
        <div className="explore-body">
          <div className="filters-container">
            <h5>Filters: </h5>
            <button className="btn active" > Show all</button>
            <button className="btn" > Morning</button>
            <button className="btn" > Night</button>
            <button className="btn" > Low-price</button>
            <button className="btn" > Medium-price</button>
          </div>
          <div className="cards">
            <Card/>
          </div>
        </div>
      
      </div>
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

Explore.propTypes = {
  userLogin: PropTypes.string,
  history: PropTypes.object,
  customer: PropTypes.string
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Explore));