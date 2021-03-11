import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import dbUrl from '../dburl.js';

import loginImgBox from '../../../images/chanhoyoon/instagramlogin.png';
import loginImg1 from '../../../images/chanhoyoon/loginImg1.png';
import loginImg2 from '../../../images/chanhoyoon/loginImg2.png';
import loginImg3 from '../../../images/chanhoyoon/loginImg3.png';
import loginImg4 from '../../../images/chanhoyoon/loginImg4.png';
import appLinkImg1 from '../../../images/chanhoyoon/appApple.png';
import appLinkImg2 from '../../../images/chanhoyoon/appAnd.png';
import './login.scss';

class Login extends React.Component {
  constructor( props ) {
    super(props);

    this.inputIdRef = React.createRef();
    this.inputPwRef = React.createRef();
  }

  state = {
    imgNameList       : [loginImg1, loginImg2, loginImg3, loginImg4],
    loginId           : '',
    loginPw           : '',
    toggleLoginIdInput: false,
    toggleLoginPwInput: false,
    imgSlideIndex     : 4,
  };

  componentDidMount() {
    setInterval(this.opacityImg, 1500);
  }

  opacityImg = () => {
    this.setState({
      imgSlideIndex: this.state.imgSlideIndex + 1
    });
  };

  handleChange = ( e ) => {
    this.setState({
      [e.target.name]: e.target.value,
    }, () => this.toggleActionInput());
  };
  toggleActionInput = () => {
    this.setState({ toggleLoginIdInput: this.state.loginId });
    this.setState({ toggleLoginPwInput: this.state.loginPw });
  };

  inputFocus = ( bool ) => {
    if (bool === false) {
      this.inputIdRef.current.focus();
      this.inputIdRef.current.value = '';
      this.inputPwRef.current.value = '';
      this.setState({ loginId: '', loginPw: '', toggleLoginIdInput: false, toggleLoginPwInput: false });
    } else if (bool === true) {
      this.setState({ toggleLoginIdInput: true, toggleLoginPwInput: true });
    }
  };

  loginIdPwCheck = () => {
    const idRegExp = /^[A-Za-z0-9_][A-Za-z0-9._]*[@]{1}[a-z]*[.]+[a-z]{1,3}$/;
    const pwRegExp = /^[A-Za-z0-9!@#$%^&*()-_=+?/,.<>][A-Za-z0-9!@#$%^&*()-_=+?/,.<>]{4,}$/;
    if (!idRegExp.test(this.state.loginId)) {
      this.inputFocus(false);
      alert('이메일을 정확히 입력해주세요!');
      return false;
    }
    if (!pwRegExp.test(this.state.loginPw)) {
      this.inputFocus(false);
      alert('비밀번호는 5글자 이상 입니다.!');
      return false;
    }
    return true;
  };

  handleLoginSubmit = async ( e ) => {
    e.preventDefault();
    // const returnCheckBoll = await this.loginIdPwCheck();
    const returnCheckBoll = true

    if (returnCheckBoll === true) {
      const getLoginCheck = await fetch(`${dbUrl}/users/signin`, {
        method: 'POST',
        body  : JSON.stringify({
          user    : this.state.loginId,
          password: this.state.loginPw
        })
      })
      .then(( res ) => res.json())
      .then(( res ) => {
        console.log(res);
        return res.status
      });

      if (parseInt(getLoginCheck) === 200) {
        this.inputFocus(true);
        this.props.history.push('/main-chanho');
        alert('로그인 성공');
      } else {
        this.inputFocus(false);
        alert('로그인 실패');
      }
    }
  };

  render() {
    const { imgNameList, toggleLoginIdInput, toggleLoginPwInput, imgSlideIndex, loginId, loginPw } = this.state;
    return (
      <div className="login">
        <div className="login-container">
          <div className="login-left-section">
            <img src={loginImgBox} alt="loginImage"/>
            <article className="img-slide">
              {imgNameList.map(( list, index ) => (
                <img src={list} className={( imgSlideIndex % 4 === index ) ? 'img-slide-list img-slide-in' : 'img-slide-list img-slide-out'} alt="loginImage"/>
              ))}
            </article>
          </div>
          <div className="login-right-section">
            <div className="login-form">
              <div className="logo">
                <h1>Instagram</h1>
              </div>
              <form className="login-input-form" action="#" onSubmit={this.handleLoginSubmit}>
                <label htmlFor="login-id" className="input-action-box">
                  <span className={toggleLoginIdInput ? 'span-id input-span-transform' : 'span-id'}>이메일</span>
                  <input type="text" className={toggleLoginIdInput ? 'login-id input-move-y' : 'login-id'} id="login-id" name="loginId" ref={this.inputIdRef} onChange={this.handleChange}/>
                </label>
                <label htmlFor="login-pw" className="input-action-box">
                  <span className={toggleLoginPwInput ? 'span-pw input-span-transform' : 'span-pw'}>비밀번호</span>
                  <input type="password" className={toggleLoginPwInput ? 'login-pw input-move-y' : 'login-pw'} id="login-pw" name="loginPw" ref={this.inputPwRef} onChange={this.handleChange}/>
                </label>
                <button className={loginId && loginPw ? 'login-btn login-btn-enable' : 'login-btn login-btn-disable'} type="submit">
                  발사!!!!
                </button>
              </form>
              <div className="line">
                <div className="line-draw"></div>
                <div className="line-text">또는</div>
                <div className="line-draw"></div>
              </div>
              <a href="" className="login-facebook">Facebook으로 로그인</a>
              <a href="" className="search-pw">비밀번호를 잊으셨나요?</a>
            </div>
            <div className="join-form">
              <p>계정이 없으신가요? <Link to='/join-chanho'>가입하기</Link></p>
            </div>
            <div className="app-install">
              <p>앱을 다운로드하세요.</p>
              <div className="app-link">
                <a href="#"><img src={appLinkImg1} alt="" className="app-image"/></a>
                <a href="#"><img src={appLinkImg2} alt="" className="app-image"/></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
