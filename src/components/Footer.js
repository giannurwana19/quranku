import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="bg-green mt-5 text-center py-3">
      <span className="text-white">
        Made With <span className="text-danger">&hearts;</span> By{' '}
        <Link
          to="https://github.com/giannurwana19"
          target="_blank"
          className="text-decoration-none text-white">
          Gian Nurwana
        </Link>
      </span>
    </div>
  );
};

export default Footer;
