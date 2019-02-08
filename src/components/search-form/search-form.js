import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './search-form.css';
import {withRouter} from 'react-router-dom';
import Actions from '../../redux/actions/actions';


class SearchForm extends Component {
  constructor(props) {
    super(props);

    this.state = { category: '',country:'' };

    this.categoryChange = this.categoryChange.bind(this);
    this.countryChange = this.countryChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }
  //Get input category value
  categoryChange(event) {
    this.setState({ category: event.target.value });
  }
  //Get input location value
  countryChange(event) {
    this.setState({ country: event.target.value });
  }
  //Click search button
  handleSubmit(event) {
    event.preventDefault();

    this.props.onGetSearchPlaces(this.state.category,this.state.country);
    this.props.history.push('/explore');
  }


  render() {

    return (
      <div className="bodyForm">
        <form onSubmit={this.handleSubmit}>
          <div className="inner-form">
            <div className="input-field first-wrap">
              <input id="search" type="text" placeholder="e.g., Food, Outdoors... " value={this.state.category} onChange={this.categoryChange}/>
            </div>
            <div className="input-field second-wrap">
              <input id="location" type="text" placeholder="Location" value={this.state.country} onChange={this.countryChange} />
            </div>
            <div className="input-field third-wrap">
              <input type="submit" value="Search" className="btn-search"/>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    userLogin: state.userLogin,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGetSearchPlaces: (category,country) => {
      dispatch({ type: Actions.GET_SEARCH, payload: {category: category, location: country}});
    }
  };
};

SearchForm.propTypes = {
  userLogin: PropTypes.string,
  history: PropTypes.object,
  onGetSearchPlaces: PropTypes.func
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchForm));