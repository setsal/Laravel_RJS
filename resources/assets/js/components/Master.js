import React, {Component} from 'react';
import { Router, Route, Link } from 'react-router-dom';

class Master extends Component {
  render(){
    return (
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="#">AppDividend</a>
            </div>
            <ul className="nav navbar-nav">
              <li className="active"><a href="#">Home</a></li>
              <li><Link to="add-item">Create Item</Link></li>
              <li><a href="#">Page 2</a></li>
              <li><a href="#">Page 3</a></li>
            </ul>
          </div>
      </nav>
          <div>
              {this.props.children}
          </div>
      </div>
    )
  }
}
export default Master;
