import React from "react";

import './Header.scss';

const Header = ({ image, content }) => {
  return (
    <header className="app__flex" style={{ backgroundImage: `url(${image})` }}>
      <div className="app__container-width">
        <div className="header__content-left">{content}</div>
      </div>
    </header>
  );
};

export default Header;
