import React, {Component} from 'react';
import {Link} from 'react-router';

class HomePage extends Component {
  render() {
    return(
      <div className="jumbotron">
        <h1>Cristina Administration</h1>
        <p>Reac, Redux and React router in ES6 for responsive web design</p>
        <Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
      </div>
    );
  }
}

export default HomePage;
