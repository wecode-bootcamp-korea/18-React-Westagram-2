import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './Login.scss';

class LoginYoojin extends Component {
    constructor(){
        super();
        this.state = {
            loginId : " ",
            loginPw : " ",
        };
    }

    goToMain = () => {
        this.props.history.push('/main-yoojin');
    }  

    handleInput = (e) => {
        this.setState({
            [e.target.name] : e.target.value,
        })
    }

    render() {
        const validation = this.state.loginId.includes("@") && this.state.loginPw.length > 4

        return (
            <div className="LoginYoojin">
                <div className="box">
                        <h1>Westagram</h1>
                        <input onChange={this.handleInput} name="loginId" className="inputBox" type="email" placeholder="전화번호, 사용자 이름 또는 이메일" />
                        <input onChange={this.handleInput} name="loginPw" className="inputBox" type="password" placeholder="비밀번호" />   
                        <button className="loginButton" onClick={validation? this.goToMain : undefined} style={{opacity: validation? "1" : "0.5"}}>로그인</button>
                    
                        <div className="breakLine">
                            <div className="line"></div>
                            <span>또는</span>
                            <div className="line"></div>
                        </div>

                        <div className="fb">
                            <i className="fab fa-facebook-square"></i>
                            <a className="fbLogin" href="https://www.facebook.com/login">
                            &nbsp;Facebook으로 로그인
                            </a>
                        </div>
                        <a className="forgetPassword" href="https://www.instagram.com/accounts/password/reset/">
                        비밀번호를 잊으셨나요?
                        </a>
                </div>
            </div>    
        );
    }
}

export default withRouter(LoginYoojin);