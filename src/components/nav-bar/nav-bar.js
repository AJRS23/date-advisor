import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './nav-bar.css';
import {NavLink,withRouter} from 'react-router-dom';
import Actions from '../../redux/actions/actions';


class NavBar extends Component {
  
  handleSelected() {
    localStorage.clear();
    this.props.onLogout();
    this.props.history.push('/');
  }

  //Change navbar if login
  handleMenu = () => {
    if(this.props.user.id!==''){
      return (
        <ul className='links'>
          <li className='signup name'>{this.props.user.username}</li>
          <li className='login'><button className= "buton_logout" onClick={() => { this.handleSelected(); }}>Logout</button></li>        
        </ul>
      );
    }
    else{
      return(
        <ul className='links'>     
          <li className='login'><NavLink to='/login' exact className='link'>Login</NavLink></li>        
        </ul>
      );
    }
  };

  render() {
    return (
      <div className="menu-container">
        <div className="menu">
        
          <div className="menu__name"><NavLink to='/' exact className='link'>Date Advisor</NavLink></div>
          {this.handleMenu()}
    
        </div>
      </div>
    );
    
  }
}
const mapStateToProps = (state) => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLogout: () => {
      dispatch({ type: Actions.LOGOUT });
    }
  };
};

NavBar.propTypes = {
  user: PropTypes.object,
  history: PropTypes.object,
  onLogout: PropTypes.func
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar));