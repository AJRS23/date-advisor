import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './explore.css';
import {withRouter} from 'react-router-dom';
import NavBar from '../nav-bar/nav-bar';
import Card from '../card/card';
import Filter from '../filter/filter';

class Explore extends Component {
  
  
  render() {
    
    return (
      <div>
        <NavBar/>
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
    listFilters: state.listFilters,
    showPlaces: state.showPlaces
  };
};

Explore.propTypes = {
  listFilters: PropTypes.array,
  history: PropTypes.object,
  showPlaces: PropTypes.array,
};

export default withRouter(connect(mapStateToProps)(Explore));