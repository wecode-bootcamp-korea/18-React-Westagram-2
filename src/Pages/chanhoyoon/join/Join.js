import React, { Fragment } from 'react';
import axios from 'axios';
import dbUrl from '../dburl.js';

import { withRouter } from 'react-router-dom';
import loginImgBox from '../../../images/chanhoyoon/instagramlogin.png';
import loginImg1 from '../../../images/chanhoyoon/loginImg1.png';
import loginImg2 from '../../../images/chanhoyoon/loginImg2.png';
import loginImg3 from '../../../images/chanhoyoon/loginImg3.png';
import loginImg4 from '../../../images/chanhoyoon/loginImg4.png';
import appLinkImg1 from '../../../images/chanhoyoon/appApple.png';
import appLinkImg2 from '../../../images/chanhoyoon/appAnd.png';

import './Join.scss';

class Join extends React.Component {

  constructor( props ) {
    super(props);

    this.inputNameRef = React.createRef();
    this.inputIdRef = React.createRef();
    this.inputPhoneRef = React.createRef();
    this.inputPwRef = React.createRef();
    this.inputRePwRef = React.createRef();
  }

  state = {
    imgNameList          : [loginImg1, loginImg2, loginImg3, loginImg4],
    username             : '',
    email                : '',
    phone_number         : '',
    password             : '',
    rePassword           : '',
    toggleLoginNameInput : false,
    toggleLoginIdInput   : false,
    toggleLoginPhoneInput: false,
    toggleLoginPwInput   : false,
    toggleLoginRePwInput : false,
    toggleJoinBtnCheck   : false,
    imgSlideIndex        : 4,
  };

  componentDidMount() {
    setInterval(this.opacityImg, 1500);
  }

  opacityImg = () => {
    this.setState({
      imgSlideIndex: this.state.imgSlideIndex + 1
    });
  };

  handleChange = async ( e ) => {
    await this.setState({
      [e.target.name]: e.target.value
    });
    await this.toggleActionInput();
    await this.toggleJoinBtn();
  };

  toggleJoinBtn = () => {
    const { username, email, phone_number, password, rePassword } = this.state;
    if (username && email && phone_number && password && rePassword)
      this.setState({ toggleJoinBtnCheck: true });
    else
      this.setState({ toggleJoinBtnCheck: false });
  };

  toggleActionInput = () => {
    this.state.username ? this.setState({ toggleLoginNameInput: true }) : this.setState({ toggleLoginNameInput: false });
    this.state.email ? this.setState({ toggleLoginIdInput: true }) : this.setState({ toggleLoginIdInput: false });
    this.state.phone_number ? this.setState({ toggleLoginPhoneInput: true }) : this.setState({ toggleLoginPhoneInput: false });
    this.state.password ? this.setState({ toggleLoginPwInput: true }) : this.setState({ toggleLoginPwInput: false });
    this.state.rePassword ? this.setState({ toggleLoginRePwInput: true }) : this.setState({ toggleLoginRePwInput: false });
  };

  handleJoinSubmit = async ( e ) => {
    e.preventDefault();
    await axios.post(`${dbUrl}/users/signup`, {
      user_name    : this.state.username,
      email       : this.state.email,
      phone_number: this.state.phone_number,
      password    : this.state.password
    })
    .then(function ( response ) {
      if(parseInt(response.status) === 200) {
        this.props.history.push('/main-chanho')
        alert('로그인 성공')
      }
    })
    .catch(error => {
      console.log('error : ', error.response);
    });
  };

  render() {
    const {
      imgNameList, toggleJoinBtnCheck, toggleLoginIdInput, toggleLoginPwInput,
      toggleLoginRePwInput, toggleLoginNameInput, toggleLoginPhoneInput, imgSlideIndex
    } = this.state;
    return (
      <Fragment>
        <div className="login">
          <div className="login-container">
            <div className="login-left-section">
              <img src={loginImgBox} alt="loginImage"/>
              <article className="img-slide">
                <img src={imgNameList[0]} className={( imgSlideIndex % 4 ) === 0 ? 'img-slide-list img-slide-in' : 'img-slide-list img-slide-out'} alt="loginImage"/>
                <img src={imgNameList[1]} className={( imgSlideIndex % 4 ) === 1 ? 'img-slide-list img-slide-in' : 'img-slide-list img-slide-out'} alt="loginImage"/>
                <img src={imgNameList[2]} className={( imgSlideIndex % 4 ) === 2 ? 'img-slide-list img-slide-in' : 'img-slide-list img-slide-out'} alt="loginImage"/>
                <img src={imgNameList[3]} className={( imgSlideIndex % 4 ) === 3 ? 'img-slide-list img-slide-in' : 'img-slide-list img-slide-out'} alt="loginImage"/>
              </article>
            </div>
            <div className="login-right-section">
              <div className="login-form">
                <div className="logo">
                  <h1>Instagram</h1>
                </div>
                <form className="login-input-form" action="#" onSubmit={this.handleJoinSubmit}>
                  <label htmlFor="login-name" className="input-action-box">
                    <span className={toggleLoginNameInput ? 'span-id input-span-transform' : 'span-id'}>이름</span>
                    <input type="text" className={toggleLoginNameInput ? 'login-id input-move-y' : 'login-id'} id="login-name" name="username" ref={this.inputNameRef} onChange={this.handleChange}/>
                  </label>
                  <label htmlFor="login-email" className="input-action-box">
                    <span className={toggleLoginIdInput ? 'span-id input-span-transform' : 'span-id'}>이메일</span>
                    <input type="text" className={toggleLoginIdInput ? 'login-id input-move-y' : 'login-id'} id="login-email" name="email" ref={this.inputIdRef} onChange={this.handleChange}/>
                  </label>
                  <label htmlFor="login-phone" className="input-action-box">
                    <span className={toggleLoginPhoneInput ? 'span-id input-span-transform' : 'span-id'}>전화번호</span>
                    <input type="text" className={toggleLoginPhoneInput ? 'login-id input-move-y' : 'login-id'} id="login-phone" name="phone_number" ref={this.inputPhoneRef}
                           onChange={this.handleChange}/>
                  </label>
                  <label htmlFor="login-pw" className="input-action-box">
                    <span className={toggleLoginPwInput ? 'span-pw input-span-transform' : 'span-pw'}>비밀번호</span>
                    <input type="password" className={toggleLoginPwInput ? 'login-pw input-move-y' : 'login-pw'} id="login-pw" name="password" ref={this.inputPwRef} onChange={this.handleChange}/>
                  </label>
                  <label htmlFor="login-repw" className="input-action-box">
                    <span className={toggleLoginRePwInput ? 'span-pw input-span-transform' : 'span-pw'}>비밀번호 다시</span>
                    <input type="password" className={toggleLoginRePwInput ? 'login-pw input-move-y' : 'login-pw'} id="login-repw" name="rePassword" ref={this.inputRePwRef}
                           onChange={this.handleChange}/>
                  </label>
                  <button className={toggleJoinBtnCheck ? 'login-btn login-btn-enable' : 'login-btn login-btn-disable'} type="submit">
                    회원가입 발사!!!!
                  </button>
                </form>
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
      </Fragment>
    );
  }
}

export default withRouter(Join);