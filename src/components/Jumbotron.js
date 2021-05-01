import React from 'react';
import logo from '../img/quran.png';

const Jumbotron = () => {
  return (
    <section className="jumbotron text-center bg-gray">
      <img src={logo} alt="quran" width="100" />
      <h1 className="display-5 fw-bold">Quranku</h1>
      <p className="lead">Aplikasi Quran versi Bahasa Indonesia</p>
    </section>
  );
};

export default Jumbotron;
