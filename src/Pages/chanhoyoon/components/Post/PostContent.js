import React from 'react';

import PostContentHeader from './PostContentHeader';
import PostContentMain from './PostContentMain';
import PostContentDescription from './PostContentDescription';

import './PostContent.scss';

class PostContent extends React.Component {
  render() {
    const { mainContentObj: mainObj, index, handleLikeUpdate } = this.props;

    return (
      <>
        <section className="main-content-list">
          <PostContentHeader contentHeader={mainObj}/>
          <PostContentMain contentMainImgList={mainObj.channelContentImgList} contentMainName={mainObj.channelName}/>
          <PostContentDescription mainContentObj={mainObj} handleLikeUpdate={handleLikeUpdate} index={index}/>
        </section>
      </>
    );
  }
}

export default PostContent;