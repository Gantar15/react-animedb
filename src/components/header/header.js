import React from 'react';
import {Link} from 'react-router-dom';

import './header.css';

const Header = () => {
  return (
    <div className="header d-flex">
      <h3>
        <Link to="/">
          <b>Anime DB</b>
        </Link>
      </h3>
      <ul className="d-flex">
        <li>
          <Link to="/anime">Anime</Link>
        </li>
        <li>
          <Link to="/person">Persons</Link>
        </li>
        <li>
          <Link to="/manga">Manga</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;