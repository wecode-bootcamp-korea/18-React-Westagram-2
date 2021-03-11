import React from 'react';
import './PostContentHeader.scss';

class PostContentHeader extends React.Component {

  render() {

    const { contentHeader: list } = this.props;

    return (
      <header className="content-list-header">
        <div className="list-main-box">
          <div className="content-list-header-img">
            <img src={list.channelProfileImg} alt={list.channelName}/>
          </div>
          <div className="list-channel">
            <a href="#" className="list-channel-name">{list.channelName}</a>
            <a href="#" className="list-channel-location">{list.channelLocation}</a>
          </div>
        </div>
        <div className="main-content-list-viewmore">
          <button className="list-viewmore">
            <i className="fas fa-ellipsis-h"></i>
          </button>
        </div>
      </header>
    );
  }
}

export default PostContentHeader;