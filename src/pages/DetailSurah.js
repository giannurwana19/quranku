import axios from 'axios';
import React, { Component, Fragment } from 'react';
import Footer from '../components/Footer';
import Jumbotron from '../components/Jumbotron';
import Navbar from '../components/Navbar';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nomor: props.match.params.nomor,
      data: {},
      allAyat: [],
      allTafsir: [],
    };
  }

  componentDidMount() {
    this.getAllAyat(this.state.nomor);
  }

  getAllAyat = async nomor => {
    const { data } = await axios(`https://equran.id/api/surat/${nomor}`);

    this.setState(
      {
        data: data,
        allAyat: data.ayat,
      },
      () => {
        document.title = this.state.data.nama_latin;
      }
    );
  };

  componentWillUnmount() {
    document.title = 'Quranku';
  }

  render() {
    const { data, allAyat } = this.state;
    return (
      <Fragment>
        <Navbar />
        <Jumbotron data={data} />
        <div className="container">
          {allAyat.map(ayat => (
            <Fragment key={ayat.nomor}>
              <div className="card my-2">
                <div className="card-body">
                  <h2 className="card-title d-flex justify-content-end">
                    {ayat.ar}
                  </h2>
                  <br />
                  <p
                    className="card-text"
                    dangerouslySetInnerHTML={{ __html: ayat.tr }}></p>
                  <p className="card-text">
                    <em>
                      <strong>{ayat.nomor}</strong>. "{ayat.idn}"
                    </em>
                  </p>
                </div>
              </div>
            </Fragment>
          ))}
        </div>
        <Footer />
      </Fragment>
    );
  }
}
