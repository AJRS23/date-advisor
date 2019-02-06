import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './nav-bar.css';
import {NavLink,withRouter} from 'react-router-dom';



class NavBar extends Component {
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
      
      
      <div className="menu-container">
        <div className="menu">
        
          <div className="menu__name"><NavLink to='/' exact className='link'>Date Advisor</NavLink></div>
          <ul className='links'>
            <li className='signup'><NavLink to='/signup' exact className='link'>Sign Up</NavLink></li>     
            <li className='login'><NavLink to='/login' exact className='link'>Login</NavLink></li>        
          </ul>
    
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

NavBar.propTypes = {
  userLogin: PropTypes.string,
  history: PropTypes.object,
  customer: PropTypes.string
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar));