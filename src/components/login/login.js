import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './login.css';
import {NavLink,withRouter} from 'react-router-dom';
import NavBar from '../nav-bar/nav-bar';



class Login extends Component {
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
      
      <div className="wrap">
        <NavBar/>
        <div className="form">
          <div className="body_login"></div>
          <div className="grad"></div>
          <div className="header">
            <div>Date<span>Advisor</span></div>
          </div>
          <br/>
          <div className="login_form">
            <input type="text" placeholder="username" name="user"></input><br/>
            <input type="password" placeholder="password" name="password"></input><br/>
            <input type="button" value="Login"></input>
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

Login.propTypes = {
  userLogin: PropTypes.string,
  history: PropTypes.object,
  customer: PropTypes.string
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));