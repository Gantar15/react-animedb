import React from 'react';

import './header.css';

const Header = () => {
  return (
    <div className="header d-flex">
      <h3>
        <a href="#">
          <b>Anime DB</b>
        </a>
      </h3>
      <ul className="d-flex">
        <li>
          <a href="#">Anime</a>
        </li>
        <li>
          <a href="#">Persons</a>
        </li>
        <li>
          <a href="#">Manga</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;