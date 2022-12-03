import React from 'react';

const CardSurah = ({ surah, handleClick }) => {
  return (
    <div className="col-sm-6 col-md-4 col-lg-3 mb-3">
      <div className="card effect-shadow" onClick={() => handleClick(surah.nomor)}>
        <div className="card-body">
          <h5 className="card-title d-flex">
            <div className="number">{surah.nomor}</div>{' '}
            <span>{surah.nama_latin}</span>
          </h5>
          <p className="card-text">{surah.arti}</p>
          <div className="card-subtitle mb-2 text-muted">
            <span className="float-start">{surah.jumlah_ayat} ayat</span>
            <h4 className="float-end">{surah.nama}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSurah;
