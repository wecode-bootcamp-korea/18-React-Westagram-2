import React from 'react';

import './PostComment.scss';

class PostComment extends React.Component {

  state = {
    toggleLike: false,
  };

  toggleLike = () => {
    this.state.toggleLike ? this.setState({ toggleLike: false }) : this.setState({ toggleLike: true });
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
          <button className={toggleLike ? 'comment-like-btn like-scale-action-out' : 'comment-like-btn like-scale-action-in'} onClick={this.toggleLike}><i
            className={toggleLike ? 'fas fa-heart' : 'far fa-heart'} style={toggleLike ? { color: `red` } : { color: 'black' }}></i></button>
          <button className="comment-delete-btn" onClick={this.deleteComment}><i className="fas fa-times"></i></button>
        </div>
      </div>
    );
  }
}

export default PostComment;