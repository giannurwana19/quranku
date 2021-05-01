import './App.css';
import Navbar from './components/Navbar';
import { Fragment } from 'react';
import Jumbotron from './components/Jumbotron';
import Search from './components/Search';
import CardSurah from './components/CardSurah';
import Footer from './components/Footer';
import HeadingText from './components/HeadingText';

function App() {
  return (
    <Fragment>
      <Navbar />
      <Jumbotron />
      <div className="container">
        <Search />
        <HeadingText />
        <div className="row">
          <CardSurah />
          <CardSurah />
          <CardSurah />
          <CardSurah />
          <CardSurah />
          <CardSurah />
          <CardSurah />
          <CardSurah />
          <CardSurah />
          <CardSurah />
          <CardSurah />
          <CardSurah />
          <CardSurah />
          <CardSurah />
          <CardSurah />
          <CardSurah />
          <CardSurah />
          <CardSurah />
          <CardSurah />
          <CardSurah />
          <CardSurah />
          <CardSurah />
        </div>
      </div>
      <Footer />
    </Fragment>
  );
}

export default App;
