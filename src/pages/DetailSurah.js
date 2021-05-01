import axios from 'axios';
import React, { Component, Fragment } from 'react';
import Jumbotron from '../components/Jumbotron';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nomor: props.match.params.nomor,
      data: {},
      allAyat: [],
    };
  }

  componentDidMount() {
    this.getAllAyat(this.state.nomor);
  }

  getAllAyat = async nomor => {
    const { data } = await axios(`https://equran.id/api/surat/${nomor}`);

    this.setState({
      data: data,
      allAyat: data.ayat,
    });
  };

  render() {
    const { data, allAyat } = this.state;
    return (
      <Fragment>
        <Jumbotron data={data} />
        <div className="container">
          {allAyat.map(ayat => (
            <Fragment key={ayat.nomor}>
              <div className="card my-2">
                <div className="card-body">
                  <h4 className="card-title d-flex justify-content-end">
                    {ayat.ar}
                  </h4>
                  <br />
                  <p className="card-text">
                    <em>
                      {ayat.nomor}. "{ayat.idn}"
                    </em>
                  </p>
                </div>
              </div>
            </Fragment>
          ))}
        </div>
      </Fragment>
    );
  }
}
