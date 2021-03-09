import React from 'react';

import './aside.scss';

class Aside extends React.Component {
  state = {
    'accountObj'       : {},
    'asideRecommendObj': [],
  };

  componentDidMount() {
    fetch('http://localhost:3000/data/accountObj.json', {
      method: 'GET'
    })
    .then(res => res.json())
    .then(data => {
      this.setState({
        accountObj: data,
      });
    });
    fetch('http://localhost:3000/data/asideRecommendObj.json', {
      method: 'GET'
    })
    .then(res => res.json())
    .then(data => {
      this.setState({
        asideRecommendObj: data,
      });
    });
  }

  render() {
    const { accountObj, asideRecommendObj } = this.state;
    console.log(accountObj);
    console.log(asideRecommendObj);
    return (
      <aside className="aside-section">
        <div className="aside-section-fixed">
          <div className="aside-section-header">
            <div className="aside-section-header-img">
              <img src={this.state.accountObj.imgUrl} alt="Profile Image"/>
            </div>
            <div className="aside-section-header-content">
              <div className="aside-section-header-content-profilename"><a href="#" className="profilename-link">{accountObj.nickname}</a></div>
              <div className="aside-section-header-content-name">{accountObj.name}</div>
            </div>
            <button className="aside-section-header-btn blue-link">
              <div>전환</div>
            </button>
          </div>
          <div className="aside-section-recommend">
            <div className="aside-section-recommend-header">
              <div className="aside-recommend-comment">회원님을 위한 추천</div>
              <a className="aside-recomment-link">모두 보기</a>
            </div>
            <div className="aside-section-recommend-list">
              {asideRecommendObj.map(( list ) => (
                <div className="recommend-list-profile" key={list.id}>
                  <div className="recommend-list-profile-img">
                    <img src={list.imgUrl} alt="추천 리스트"/>
                  </div>
                  <div className="recommend-list-profile-nickname"><a href="#">{list.name}</a></div>
                  <button className="recomment-list-profile-follow blue-link">
                    <div>팔로우</div>
                  </button>
                </div>
              ))}

            </div>
          </div>
          <div className="aside-section-footer">
            <nav className="aside-section-nav">
              <ul className="aside-section-nav-title">
                <li className="aside-section-nav-list"><a href="#" className="nav-list-link" target="_blank">소개</a></li>
                <li className="aside-section-nav-list"><a href="#" className="nav-list-link" target="_blank">도움말</a></li>
                <li className="aside-section-nav-list"><a href="#" className="nav-list-link" target="_blank">홍보 센터</a></li>
                <li className="aside-section-nav-list"><a href="#" className="nav-list-link" target="_blank">API</a></li>
                <li className="aside-section-nav-list"><a href="#" className="nav-list-link" target="_blank">채용 정보</a></li>
                <li className="aside-section-nav-list"><a href="#" className="nav-list-link" target="_blank">개인정보처리방침</a></li>
                <li className="aside-section-nav-list"><a href="#" className="nav-list-link" target="_blank">약관</a></li>
                <li className="aside-section-nav-list"><a href="#" className="nav-list-link" target="_blank">위치</a></li>
                <li className="aside-section-nav-list"><a href="#" className="nav-list-link" target="_blank">인기 계정</a></li>
                <li className="aside-section-nav-list"><a href="#" className="nav-list-link" target="_blank">해시태그</a></li>
                <li className="aside-section-nav-list"><a href="#" className="nav-list-link" target="_blank">언어</a></li>
              </ul>
            </nav>
            <br/>
            <span className="aside-section-nav-copy">© 2021 INSTAGRAM FROM FACEBOOK</span>
          </div>
        </div>
      </aside>
    );
  }
}

export default Aside;