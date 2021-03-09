import React from 'react';
import './main.scss';

import PostContent from '../components/Post/PostContent.js';

class Main extends React.Component {

  state = {
    'contentHeaderObj': [],
    'mainContentObj'  : [],
  };

  componentDidMount() {
    fetch('http://localhost:3000/data/contentHeaderObj.json', {
      method: 'GET'
    })
    .then(res => res.json())
    .then(data => {
      this.setState({
        contentHeaderObj: data,
      });
    });

    fetch('http://localhost:3000/data/mainContentObj.json', {
      method: 'GET'
    })
    .then(res => res.json())
    .then(data => {
      this.setState({
        mainContentObj: data,
      });
    });
  }

  handleLikeUpdate = ( id, data ) => {
    console.log(id, data);
    const { mainContentObj } = this.state;
    this.setState({
      information: mainContentObj.map(( list ) => (
        id === list.id ? { ...list, ...data } : { list } )
      )
    });
  };

  render() {
    const { contentHeaderObj, mainContentObj } = this.state;

    return (
      <div className="main-section">
        <div className="main-content-header">
          <ul className="main-content-header-ul">
            {contentHeaderObj.map(( list, index ) => (
              <li className="header-list" key={index}>
                <button className="header-list-btn">
                  <div className="header-list-img">
                    <img src={list.imgUrl} alt="profile image"/>
                  </div>
                  <div class="header-list-name">{list.name}</div>
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="main-content">
          {mainContentObj.map(( list, index ) => (
            <PostContent mainContentObj={list} handleLikeUpdate={this.handleLikeUpdate} index={index} key={list.id}/>
          ))}
        </div>
      </div>
    );
  }
}

export default Main;