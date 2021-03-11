import React from 'react';
import './PostContentMain.scss';

class PostContentMain extends React.Component {

  state = {
    slideX         : 0,
    imgUlWidth     : null,
    imgListSumWidth: 0
  };

  componentDidMount() {
    this.setState({
      imgUlWidth     : this.getWidth.offsetWidth,
      imgListSumWidth: this.getWidth.offsetWidth * this.props.contentMainImgList.length,
    });
  }

  actionSlide = ( e ) => {
    const { slideX, imgUlWidth, imgListSumWidth } = this.state;
    if (e.target.className === 'fas fa-arrow-circle-right') {
      if (Math.abs(slideX) < imgListSumWidth-imgUlWidth) {
        this.setState({ slideX: slideX - imgUlWidth });
      } else {
        this.setState({ slideX: 0 });
      }
    }
    if (e.target.className === 'fas fa-arrow-circle-left') {
      if (slideX === 0) {
        this.setState({ slideX: (imgListSumWidth-imgUlWidth)*-1 });
      } else {
        this.setState({ slideX: slideX + imgUlWidth });
      }
    }
  };

  render() {
    const { contentMainImgList, contentMainName } = this.props;
    const { slideX } = this.state;
    return (
      <div className="content-list-main">
        <div className="list-main-img">
          <ul className="list-main-img-ul" ref={( e ) => this.getWidth = e}>
            {contentMainImgList.length > 1 ? (
              <>
                {contentMainImgList.map(( imgList ) => (
                  <li className="img-list" style={{ transform: `translateX(${slideX}px)` }}>
                    <div className="list-main-img-arrow">
                      <i className="fas fa-arrow-circle-left" name="left" onClick={this.actionSlide}></i>
                      <i className="fas fa-arrow-circle-right" name="right" onClick={this.actionSlide}></i>
                    </div>
                    <img src={imgList} alt={contentMainName}/>
                  </li>
                ))}
              </>
            ) : (
              <li className="img-list">
                <img src={contentMainImgList} alt={contentMainName}/>
              </li> )}
          </ul>
        </div>
      </div>
    );
  }
}

export default PostContentMain;