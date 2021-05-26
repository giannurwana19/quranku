import React, { Component, Fragment } from 'react';
import Footer from '../components/Footer';
import HeadingText from '../components/HeadingText';
import Jumbotron from '../components/Jumbotron';
import Navbar from '../components/Navbar';
import Surah from '../components/Surah';

export default class Home extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <Jumbotron />
        <div className="container">
          <HeadingText />
          <Surah {...this.props} />
        </div>
        <Footer />
      </Fragment>
    );
  }
}
