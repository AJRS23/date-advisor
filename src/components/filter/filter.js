import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './filter.css';
import {withRouter} from 'react-router-dom';
import Actions from '../../redux/actions/actions';

class Filter extends Component {
  constructor(props) {
    super(props);
    this.handleSelected = this.handleSelected.bind(this);
  }
  //Filter selection
  handleSelected(index) {
    this.props.onSelectFilter(index);
  }

  render() {
    const { filter} = this.props;
    let class_btn = 'btn';
    //Set color filter activated
    if (filter.active) {
      class_btn += ' active';
    }
    //Set division between filters
    if(this.props.ind === 1){
      class_btn += ' second';
    }
    //Hide saved button if not an user
    if(this.props.ind === 1 && this.props.user.id ===''){
      class_btn += ' hidden';
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
    user: state.user
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
  user: PropTypes.object,
  history: PropTypes.object,
  ind:PropTypes.number,
  filter: PropTypes.object,
  onSelectFilter: PropTypes.func
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Filter));