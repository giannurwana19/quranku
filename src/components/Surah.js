import axios from 'axios';
import React, { Component } from 'react';
import CardSurah from './CardSurah';

export default class Surah extends Component {
  state = {
    allSurah: [],
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

  render() {
    const { allSurah } = this.state;
    return (
      <div className="row">
        {allSurah.map(surah => (
          <CardSurah key={surah.nomor} surah={surah} />
        ))}
      </div>
    );
  }
}
