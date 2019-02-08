import React, { Component } from 'react';
import './hero.css';
import {withRouter} from 'react-router-dom';
import SearchForm from '../search-form/search-form';

class Hero extends Component {

  render() {
    
    return (
      <section className="hero">
        <div className="hero-inner">
          <h1>Date Advisor</h1>
          <h2>Find the best places to eat, drink, buy or visit with your date in Costa Rica. </h2>
          <h2>Never before has it been so easy to plan a date</h2>
          <SearchForm/>
        </div>
      </section>
    ); 
  }
}

export default withRouter(Hero);