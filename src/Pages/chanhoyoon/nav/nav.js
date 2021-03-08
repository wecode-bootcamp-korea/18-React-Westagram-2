import React from 'react';

import './nav.scss';

class Nav extends React.Component {

  render() {
    return (
      <nav className="nav">
        <div className="nav-container">
          <div className="nav-text"><h1>Instagram</h1></div>
          <div className="nav-search">
            <i className="fas fa-search"></i>
            <input type="text" className="search" placeholder=""/>
            <i className="fas fa-times-circle"></i>
          </div>
          <div className="nav-menu">
            <div className="nav-menu-list">
              <a href=""><i className="fas fa-home"></i></a>
              <a href=""><i className="far fa-paper-plane"></i></a>
              <a href=""><i className="far fa-compass"></i></a>
              <a href=""><i className="far fa-heart"></i></a>
              <a href="" className="nav-profile"></a>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;