import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './card.css';
import {withRouter} from 'react-router-dom';
import Actions from '../../redux/actions/actions';


class Card extends Component {
  constructor(props) {
    super(props);
    this.likeSelected = this.likeSelected.bind(this);
    this.visitSelected = this.visitSelected.bind(this);
  }

  //Like button click
  likeSelected(index) {
    this.props.onSetLike(index);
    this.props.history.push('/explore');
  }
  //Visit button click
  visitSelected(index){
    this.props.onSetVisit(index);
    this.props.history.push('/explore');
  }

  render() {

    const { card } = this.props;
    let like_btn = 'btn_like_visit';
    let visit_btn = 'btn_like_visit';
    
    //Activate like button
    if(this.props.user.likedPlaces.find(cat => cat === card.id)){
      like_btn += ' active';
    }
    //Activate visit button
    if(this.props.user.visitedPlaces.find(cat => cat === card.id)){ 
      visit_btn += ' active_visit';
    }
    //Hide like button if not an user
    if(this.props.user.id ===''){
      visit_btn += ' hidden';
      like_btn += ' hidden';
    }

    return (
      <div className="results">
        <div className="result_card">
          <div className="info_section">

            <div className="result_header">
              <img className="result_photo" src={card.URL} alt="place"/>
              <h1>{card.name}</h1>
              <h4>{card.location.formattedAddress}</h4>
              <p className="type"><b>Phone:</b></p><p className="type"> { card.phone}</p><br/>
              <span className="hour">{card.openningHour} - {card.clossingHour}</span>
            </div>

            <div className="result_desc">
              <p className="text">{card.description}</p><p className="text counts"><b>Visits:</b> {card.visitsCount}</p>
              <p><b>Likes:</b> {card.likesCount} </p>
            </div>

            <div className="result_social">
              <ul>
                <li><button className={visit_btn} onClick={() => { this.visitSelected(this.props.ind); }}>
                  <i className="material-icons">person</i>
                </button></li>
                <li><button className={like_btn} onClick={() => { this.likeSelected(this.props.ind); }}>
                  <i className="material-icons"></i>
                </button></li>
              </ul>
            </div>
          </div>

          <div className="blur_back" style={{backgroundImage: 'url(' + card.URL + ')'}}></div>
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
    },
    onSetVisit: (index) => {
      dispatch({ type: Actions.SET_VISIT, index });
    }
  };
};

Card.propTypes = {
  user: PropTypes.object,
  history: PropTypes.object,
  card: PropTypes.object,
  ind:PropTypes.number,
  onSetLike: PropTypes.func,
  onSetVisit: PropTypes.func
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Card));