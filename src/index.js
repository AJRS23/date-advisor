import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom';
import BookReducer from './redux/reducers/reducers';
import * as serviceWorker from './serviceWorker';
import Login from './components/login/login';
import Explore from './components/explore/explore';


const store = createStore(BookReducer);

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Route exact path="/" component={App} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/explore" component={Explore} />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
