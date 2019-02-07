import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './card.css';
import {NavLink,withRouter} from 'react-router-dom';
import NavBar from '../nav-bar/nav-bar';
import Actions from '../../redux/actions/actions';




class Card extends Component {
  constructor(props) {
    super(props);
    this.likeSelected = this.likeSelected.bind(this);
    
    //this.visitSelected = this.visitSelected.bind(this);

  }

  likeSelected(index) {
    
    this.props.onSetLike(index);
    this.props.history.push('/explore');
  }

  render() {
    const { card } = this.props;
    let class_btn = 'btn_like';
    
    console.log(this.props.user);
    if(this.props.user.likedPlaces.find(cat => cat === card.id)){
      console.log(card.id);
      class_btn += ' active';
    }
    
    
    return (
      <div className="results">
        <div className="result_card" id="bright">
          <div className="info_section">
            <div className="result_header">
              <img className="result_photo" src={card.URL}/>
              <h1>{card.name}</h1>
              <h4>{card.location.formattedAddress}</h4>
              <p className="type"><b>Phone:  </b></p>
              <p className="type"> { card.phone}</p>
              <br/>
              <span className="hour">{card.openningHour} - {card.clossingHour}</span>
              
            </div>
            <div className="result_desc">
              <p className="text">
                {card.description}
              </p>
              <p className="text counts">
                <b>Visits:</b> {card.visitsCount}
              </p>
              <p >
                <b>Likes:</b> {card.likesCount} 
              </p>
 
            </div>
            <div className="result_social">
              <ul>
                <li>
                  <button className={class_btn} onClick={() => { this.visitSelected(this.props.ind); }}><i className="material-icons">person</i></button>
                </li>
                <li>
                  <button className={class_btn} onClick={() => { this.likeSelected(this.props.ind); }}><i className="material-icons"></i></button>
                </li>
              </ul>
            </div>
          </div>
          <div className="blur_back" style={{backgroundImage: 'url(' + card.URL + ')'}}>
          </div>
          
        </div>
      </div>
    );
    
  }
}
const mapStateToProps = (state) => {
  return {
    user: state.user,

  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSetLike: (index) => {
      dispatch({ type: Actions.SET_LIKE, index });
    
    }
  };
};

Card.propTypes = {
  userLogin: PropTypes.string,
  history: PropTypes.object,
  customer: PropTypes.string
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Card));