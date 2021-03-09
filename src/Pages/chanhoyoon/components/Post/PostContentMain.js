import React from 'react';
import './PostContentMain.scss';

class PostContentMain extends React.Component {

  render() {
    const { contentMainImgList, contentMainName } = this.props;
    return (
      <>
        <div className="content-list-main">
          <div className="list-main-img">
            <ul className="list-main-img-ul">
              <li className="img-list">
                <img src={contentMainImgList} alt={contentMainName}/>
              </li>
            </ul>
          </div>
        </div>
      </>
    );
  }
}

export default PostContentMain;