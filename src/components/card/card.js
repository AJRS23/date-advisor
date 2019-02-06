import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './card.css';
import {NavLink,withRouter} from 'react-router-dom';
import NavBar from '../nav-bar/nav-bar';




class Card extends Component {
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
      
      <div className="results">
        
        <div className="result_card" id="bright">
          <div className="info_section">
            <div className="result_header">
              <img className="result_photo" src="https://file.videopolis.com/D/9dc9f4ba-0b2d-4cbb-979f-fee7be8a4198/8485.11521.brussels.the-hotel-brussels.amenity.restaurant-AD3WAP2L-13000-853x480.jpeg"/>
              <h1>Name</h1>
              <h4>Location</h4>
              <span className="hour">0:00 - 0:00</span>
              <br/>
              <p className="type">Phone</p>
            </div>
            <div className="result_desc">
              <p className="text">
              Description...
        
              </p>
              <p className="text">
              Likes count: 
              </p>
            </div>
            <div className="result_social">
              <ul>
                <li><i className="material-icons">share</i></li>
                <li><i className="material-icons"></i></li>
                <li><i className="material-icons">chat_bubble</i></li>
              </ul>
            </div>
          </div>
          <div className="blur_back bright_back"></div>
        </div>
        <div className="result_card" id="bright">
          <div className="info_section">
            <div className="result_header">
              <img className="result_photo" src="https://file.videopolis.com/D/9dc9f4ba-0b2d-4cbb-979f-fee7be8a4198/8485.11521.brussels.the-hotel-brussels.amenity.restaurant-AD3WAP2L-13000-853x480.jpeg"/>
              <h1>Name</h1>
              <h4>Location</h4>
              <span className="hour">0:00 - 0:00</span>
              <p className="type">Phone</p>
            </div>
            <div className="result_desc">
              <p className="text">
              Description...
        
              </p>
              <p className="text">
              Likes count: 
              </p>
            </div>
            <div className="result_social">
              <ul>
                <li><i className="material-icons">share</i></li>
                <li><i className="material-icons"></i></li>
                <li><i className="material-icons">chat_bubble</i></li>
              </ul>
            </div>
          </div>
          <div className="blur_back bright_back"></div>
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

Card.propTypes = {
  userLogin: PropTypes.string,
  history: PropTypes.object,
  customer: PropTypes.string
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Card));