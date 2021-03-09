import React from 'react';
import './PostContentMain.scss';

class PostContentMain extends React.Component {

  state = {
    slideX    : 0,
    imgUlWidth: null
  };

  componentDidMount() {
    this.setState({
      imgUlWidth: this.getWidth.offsetWidth
    });
  }

  render() {
    const { contentMainImgList, contentMainName } = this.props;
    const { imgUlWidth, slideX } = this.state;
    console.log(this.state.imgUlWidth);
    return (
      <>
        <div className="content-list-main">
          <div className="list-main-img">
            <ul className="list-main-img-ul" ref={( e ) => this.getWidth = e}>
              {contentMainImgList.length > 1 ? (
                <>
                  {contentMainImgList.map(( imgList ) => (
                    <>
                      <div className="list-main-img-arrow">
                        <i className="fas fa-arrow-circle-left"></i>
                        <i className="fas fa-arrow-circle-right"></i>
                      </div>
                      <li className="img-list" style={{ transform: `translateX(${slideX}px)` }}>
                        <img src={imgList} alt={contentMainName}/>
                      </li>
                    </>
                  ))}
                </>
              ) : (
                <li className="img-list">
                  <img src={contentMainImgList} alt={contentMainName}/>
                </li> )}
            </ul>
          </div>
        </div>
      </>
    );
  }
}

export default PostContentMain;