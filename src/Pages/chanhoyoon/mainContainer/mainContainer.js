import React from 'react';
import Main from '../main/main.js';
import Aside from '../aside/aside.js';
import './mainContainer.scss';

class MainContainer extends React.Component {
  render() {
    return (
      <section className="main">
        <Main/>
        <Aside/>
      </section>
    );
  }
}

export default MainContainer;