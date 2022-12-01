import axios from 'axios';
import React, { Component } from 'react';
import CardSurah from './CardSurah';

export default class Surah extends Component {
  state = {
    allSurah: [],
    search: '',
  };

  componentDidMount() {
    this.getAllSurah();
  }

  getAllSurah = async () => {
    const { data } = await axios('https://equran.id/api/surat');

    this.setState({
      allSurah: data,
    });
  };

  handleClick = nomor => {
    this.props.history.push(`/surah/${nomor}`);
  };

  render() {
    const { allSurah } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <div className="form-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Cari Surah..."
                value={this.state.search}
                onChange={e => this.setState({ search: e.target.value })}
              />
            </div>
          </div>
        </div>
        <div className="row">
          {allSurah
            .filter(surah =>
              surah.nama_latin
                .toLowerCase()
                .includes(this.state.search.toLowerCase())
            )
            .map(surah => (
              <CardSurah
                handleClick={id => this.handleClick(id)}
                key={surah.nomor}
                surah={surah}
              />
            ))}
        </div>
      </div>
    );
  }
}
