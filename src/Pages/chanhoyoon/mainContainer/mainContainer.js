import React from 'react';

import './mainContainer.scss';
import Main from '../main/main.js';
import Aside from '../aside/aside.js';

class MainContainer extends React.Component {

  render() {
    return (
      <section className="main">
        <Main />
        <Aside />
      </section>
    );
  }
}

export default MainContainer;