import React, { Component } from 'react';
import './PostContentText.scss';

class PostContentText extends Component {

  render() {
    const { contentText, contentName } = this.props;
    return (
      <div className="list-description-post-content-main">
          <span>
            <a className="channel-name">{contentName}</a>
          <br/>
            {contentText}
          </span>
        <br/><br/>
      </div>
    );
  }
}

export default PostContentText;