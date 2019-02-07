import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './explore.css';
import {NavLink,withRouter} from 'react-router-dom';
import NavBar from '../nav-bar/nav-bar';
import Card from '../card/card';
import Filter from '../filter/filter';


class Explore extends Component {
  constructor(props) {
    super(props);
    

  }

  handleSelected() {
    
    
    localStorage.clear();
    //this.props.onLogout();
    //this.props.history.push('/');
  }
  reset = () => {

  };
  
  

  render() {
    
    return (
      <div className="wrapper">
        <div className="nav-bar">
          <NavBar/>
        </div>
        <div className="explore-body">
          <div className="filters-container">
          
            {this.props.listFilters.map(fil => <Filter key={fil.name} filter={fil}
              ind={this.props.listFilters.indexOf(fil)}  />)}
            
            
            
          </div>
          <div className="cards">
            {this.props.showPlaces.map(card => <Card key={card.id} id={card.id}
              ind={this.props.showPlaces.indexOf(card)} card={card} />)}
           
          </div>
        </div>
      
      </div>
    );
    
  }
}
const mapStateToProps = (state) => {
  return {
    customer: state.customer,
    searchPlaces: state.searchPlaces,
    listFilters: state.listFilters,
    showPlaces: state.showPlaces
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLogout: () => {
      dispatch({ type: 'LOGOUT_USER' });
    }
  };
};

Explore.propTypes = {
  userLogin: PropTypes.string,
  history: PropTypes.object,
  customer: PropTypes.string,
  searchPlaces: PropTypes.array
  
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Explore));