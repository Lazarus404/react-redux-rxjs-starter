import React, { Component } from 'react';
import { Link } from 'react-router';
import Home from './Home';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>React Router Tutorial</h1>
        <ul role="nav">
          <li><Link to="/" activeStyle={{ color: 'red' }} onlyActiveOnIndex={true}>Home</Link></li>
          <li><Link to="/about" activeStyle={{ color: 'red' }}>About</Link></li>
          <li><Link to="/contact" activeStyle={{ color: 'red' }}>Contact</Link></li>
        </ul>

        {this.props.children || <Home/>}
      </div>
    );
  }
}
