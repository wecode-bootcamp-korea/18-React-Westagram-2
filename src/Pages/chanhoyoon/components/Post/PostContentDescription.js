import React from 'react';
import PostContentText from './PostContentText';
import PostComment from './PostComment';

import uuid from 'react-uuid';

class PostContentDescription extends React.Component {
  constructor( props ) {
    super(props);
    this.focusTextarea = React.createRef();
  }

  state = {
    comment   : '',
    toggleBtn : false,
    toggleLike: false,
    likeCount : this.props.mainContentObj.contentLike,
    comments  : this.props.mainContentObj.contentComments,
  };

  changeLikeCount = () => {
    this.state.toggleLike ? this.setState({ likeCount: this.state.likeCount + 1 }) : this.setState({ likeCount: this.state.likeCount - 1 });
    const { handleLikeUpdate, mainContentObj } = this.props;

    // 부모 컴포넌트에서 수정이 안됨
    if (this.state.toggleLike === true) {
      handleLikeUpdate(mainContentObj.id, {
        contentLike: this.state.likeCount,
      });
    } else {
      handleLikeUpdate(mainContentObj.id, {
        contentLike: this.state.likeCount,
      });
    }
  };

  toggleBtn = () => {
    this.state.comment ? this.setState({ toggleBtn: true }) : this.setState({ toggleBtn: false });
  };

  toggleLike = () => {
    this.state.toggleLike ?
      this.setState({ toggleLike: false }, () => {
        this.changeLikeCount();
      }) :
      this.setState({ toggleLike: true }, () => {
        this.changeLikeCount();
      });
  };

  getInputValue = ( e ) => {
    this.setState({
      comment: e.target.value
    }, () => {
      this.toggleBtn();
    });
  };

  onKeyPress = ( e ) => {
    if (e.key === 'Enter')
      this.addComment(e);
  };
  addComment = ( e ) => {
    e.preventDefault();
    const comment = {
      'id'  : uuid(),
      'name': 'test',
      'text': this.state.comment
    };
    this.setState({
      comments: this.state.comments.concat(comment)
    });
    this.focusTextarea.current.value = '';
    this.focusTextarea.current.focus();
  };

  removeComment = ( id ) => {
    this.setState({
      comments: this.state.comments.filter(( comment ) => comment.id !== id)
    });
  };

  render() {
    const { mainContentObj, index } = this.props;
    const { likeCount, toggleBtn, toggleLike, comments } = this.state;
    return (
      <>
        <div className="content-list-description">
          <div className="list-description-header">
            <div className="header-icon">
              <button className={toggleLike ? 'img-heart like-scale-action-in' : 'img-heart like-scale-action-out'} onClick={this.toggleLike}><i
                className={toggleLike ? 'fas fa-heart' : 'far fa-heart'} style={toggleLike ? { color: `red` } : { color: 'black' }}></i></button>
              <button className="img-comment"><i className="far fa-comment"></i></button>
              <button className="img-share"><i className="far fa-paper-plane"></i></button>
            </div>
            <div className="header-img-length-icon">
              - - -
            </div>
            <div className="header-img-bookmark-icon">
              <i className="far fa-bookmark"></i>
            </div>
          </div>
          <div className="list-description-like">
            <a href="#" className="like-count">좋아요 {likeCount}개</a>
          </div>
          <div className="list-description-post-content">
            <PostContentText contentText={mainContentObj.contentText} contentName={mainContentObj.channelName} index={index}/>
            <div className="list-description-post-content-comment">
              <div className="comment-count">
                <button className="comment-count-btn">{comments.length}개</button>
              </div>
              <div className="comment-main-box">
                {comments.map(( comment ) => (
                  <PostComment contentComment={comment} removeComment={this.removeComment} key={comment.id}/>
                ))}
              </div>
            </div>
          </div>
          <div className="list-description-date">
            <span className="description-date-time">{mainContentObj.contentDate}</span>
          </div>
          <div className="list-description-comment">
            <form action="#" className="description-comment-form" onSubmit={this.addComment}>
              <div className="comment-emoticon-icon">
                <i className="far fa-smile"></i>
              </div>
              <textarea placeholder="댓글 달기..." rows="1" className="comment-input" style={{ resize: 'none' }} ref={this.focusTextarea} onChange={this.getInputValue}
                        onKeyPress={this.onKeyPress}></textarea>
              <button className="comment-submit-btn" id="comment-submit-btn" type="submit" style={toggleBtn ? { color: `rgb(38, 126, 184)` } : { color: `rgb(211, 229, 246)` }}>
                <span>게시</span>
              </button>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default PostContentDescription;