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

  handleClick = nomor => {
    this.props.history.push(`/surah/${nomor}`);
  };

  render() {
    const { allSurah } = this.state;
    return (
      <div className="row">
        {allSurah.map(surah => (
          <CardSurah
            handleClick={id => this.handleClick(id)}
            key={surah.nomor}
            surah={surah}
          />
        ))}
      </div>
    );
  }
}
