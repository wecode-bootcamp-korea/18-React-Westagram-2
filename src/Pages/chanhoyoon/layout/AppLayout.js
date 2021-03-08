import React from 'react';

import Nav from '../nav/nav';
import MainContainer from '../mainContainer/mainContainer.js';

import '../../../Styles/common.scss';
import './AppLayout.scss';

class AppLayout extends React.Component {
  render() {
    return (
      <div className="container">
        <main className="main-container">
          <Nav/>
          <MainContainer/>
        </main>
      </div>
    );
  }
}

export default AppLayout;