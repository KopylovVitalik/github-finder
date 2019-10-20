import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export class Navbar extends Component {
  static defaultProps = {
    title: 'Navbar'
  };
  static propTypes = {
    title: PropTypes.string.isRequired
  };
  render() {
    return (
      <nav className="navbar bg-primary">
        <h1>
          <i className="fa fa-github" style={{ marginRight: '5px' }} />
          {this.props.title}
        </h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
