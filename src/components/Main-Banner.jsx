import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../../public/banner.png';
import './Main-Banner.css';

function Banner() {
  return (
    <div className="banner">
      <Link to="/adpage">
        <img src={banner} alt="banner" />
      </Link>
    </div>
  );
}

export default Banner;
