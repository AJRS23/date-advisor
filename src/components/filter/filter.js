import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './filter.css';
import {NavLink,withRouter} from 'react-router-dom';
import NavBar from '../nav-bar/nav-bar';
import Actions from '../../redux/actions/actions';




class Filter extends Component {
  constructor(props) {
    super(props);
    this.handleSelected = this.handleSelected.bind(this);
  }

  handleSelected(index) {
    
    this.props.onSelectFilter(index);
  }

  render() {
    const { filter} = this.props;
    let class_btn = 'btn';
    if (filter.active) {
      class_btn += ' active';
    }
    if(this.props.ind === 1){
      class_btn += ' second';
    }
    return (
      
      <div className="filter">
        
        <button className={class_btn} onClick={() => { this.handleSelected(this.props.ind); }}> {filter.name}</button>
  
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
    onSelectFilter: (index) => {
      dispatch({ type: Actions.SET_FILTER, index });
    }
  };
};

Filter.propTypes = {
  userLogin: PropTypes.string,
  history: PropTypes.object,
  customer: PropTypes.string
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Filter));