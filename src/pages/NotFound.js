import React from 'react';
import { Link } from 'react-router-dom';
import imageNotFound from '../img/404.svg';

const NotFound = () => {
  return (
    <div className="text-center">
      <img
        src={imageNotFound}
        alt="not found"
        style={{ display: 'block', width: '30%', margin: '13% auto 20px' }}
      />
      <Link to="/" className="btn btn-primary btn-sm">
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
