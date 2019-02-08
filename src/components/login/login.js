import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './login.css';
import {withRouter} from 'react-router-dom';
import NavBar from '../nav-bar/nav-bar';
import Actions from '../../redux/actions/actions';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = { username: '',password:'' };

    this.handleChange = this.handleChange.bind(this);
    this.passwordChange = this.passwordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //Username input get value
  handleChange(event) {
    this.setState({ username: event.target.value });
  }
  //Password input get value
  passwordChange(event) {
    this.setState({ password: event.target.value });
  }
  //Button login action
  handleSubmit(event) {
    event.preventDefault();
    this.props.onLogin(this.state.username, this.state.password);
    this.props.history.push('/');
  }
  

  render() {
    return (
      <div className="wrap">
        <NavBar/>

        <div className="form">
          <div className="body_login"></div>
          <div className="header">
            <div>Date<span>Advisor</span></div>
          </div>
          <br/>

          <form className="login_form" onSubmit={this.handleSubmit}>
            <input type="text" placeholder="username" name="user" value={this.state.username} onChange={this.handleChange}></input><br/>
            <input type="password" placeholder="password" name="password" value={this.state.password} onChange={this.passwordChange}></input><br/>
            <input type="submit" value="Login" disabled={this.state.username === ''}></input>
          </form>
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
    onLogin: (username,password) => {
      dispatch({ type: Actions.LOGIN, payload: {username: username, password: password}});
    }
  };
};

Login.propTypes = {
  history: PropTypes.object,
  onLogin: PropTypes.func
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));