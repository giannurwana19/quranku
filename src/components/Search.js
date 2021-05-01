import React from 'react';

const Search = () => {
  return (
    <div className="row">
      <div className="col-md-6">
        <div className="input-group mt-4 mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Cari Surah..."
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
