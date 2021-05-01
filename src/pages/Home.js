import React, { Component, Fragment } from 'react';
import Footer from '../components/Footer';
import HeadingText from '../components/HeadingText';
import Jumbotron from '../components/Jumbotron';
import Search from '../components/Search';
import Surah from '../components/Surah';

export default class Home extends Component {
  render() {
    return (
      <Fragment>
        <Jumbotron />
        <div className="container">
          <Search />
          <HeadingText />
          <Surah {...this.props} />
        </div>
        <Footer />
      </Fragment>
    );
  }
}
