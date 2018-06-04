import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class List extends Component {

  render() {
    return(
      <div>
        <Link
          to="/map">
          View the map!
        </Link>
        <ul>
          <li>Do something</li>
          <li>Go somewhere</li>
          <li>Pick that up</li>
          <li>Buy stuff</li>
          <li>Go home</li>
        </ul>
      </div>
    )
  }
}

export default List;
