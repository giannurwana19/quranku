import React, { Component, Fragment } from 'react';
import HeadingText from '../components/HeadingText';
import Jumbotron from '../components/Jumbotron';
import Surah from '../components/Surah';

export default class Home extends Component {
  render() {
    return (
      <Fragment>
        <Jumbotron />
        <div className="container">
          <HeadingText />
          <Surah {...this.props} />
        </div>
      </Fragment>
    );
  }
}
