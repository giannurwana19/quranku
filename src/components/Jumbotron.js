import React from 'react';
import logo from '../img/quran.png';
import Audio from './Audio';

class Jumbotron extends React.Component {
  render() {
    const { data } = this.props;
    if (data) {
      return (
        <section
          className="jumbotron text-center bg-gray mb-3"
          style={{ marginTop: '55px' }}>
          <h1 className="display-5 fw-bold">
            {data.nama_latin} | {data.arti}
          </h1>
          <p className="lead">
            {data.jumlah_ayat} ayat | {data.tempat_turun}
          </p>
          <div className="container">
            <p dangerouslySetInnerHTML={{ __html: data.deskripsi }}></p>
            <Audio src={data.audio} />
          </div>
        </section>
      );
    } else {
      return (
        <section
          className="jumbotron text-center bg-gray mb-3"
          style={{ marginTop: '55px' }}>
          <img src={logo} alt="quran" width="100" />
          <h1 className="display-5 fw-bold">Quranku</h1>
          <p className="lead">Aplikasi Quran versi Bahasa Indonesia</p>
        </section>
      );
    }
  }
}

export default Jumbotron;
