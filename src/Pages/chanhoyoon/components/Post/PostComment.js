import React from 'react';

import './PostComment.scss';

class PostComment extends React.Component {

  state = {
    toggleLike: this.props.contentComment.isLiked,
  };

  toggleLike = () => {
    this.setState({ toggleLike: !this.state.toggleLike });
  };

  deleteComment = () => {
    const { contentComment, removeComment } = this.props;
    removeComment(contentComment.id);
  };

  render() {
    const { toggleLike } = this.state;
    const { contentComment } = this.props;

    return (
      <div className="comment-box">
        <div className="comment-left-section">
          <span className="comment-nickname-link"><a href="#" className="nickname-link">{contentComment.name}</a></span>
          <span className="comment-text">{contentComment.text}</span>
        </div>
        <div className="comment-icon">
          <button className={'comment-like-btn' + (toggleLike ? ' like-scale-action-out' : ' like-scale-action-in')} onClick={this.toggleLike}>
            <i className={toggleLike ? 'fas fa-heart like-btn-red' : 'far fa-heart like-btn-black'}></i>
          </button>
          <button className="comment-delete-btn" onClick={this.deleteComment}>
            <i className="fas fa-times"></i>
          </button>
        </div>
      </div>
    );
  }
}

export default PostComment;