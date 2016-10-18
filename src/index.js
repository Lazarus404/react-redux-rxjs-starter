import 'rxjs';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux';

import configureStore from './configureStore';

import App from './containers/app';
import Home from './containers/home';
import About from './containers/about';
import Contact from './containers/contact';

const store = configureStore();
const history = syncHistoryWithStore(
  hashHistory,
  store
);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/about" component={About}/>
      </Route>
    </Router>
  </Provider>
  , document.querySelector('.container'));
