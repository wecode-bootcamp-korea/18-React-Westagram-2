import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './Login.scss';

class LoginYoojin extends Component {
    constructor(){
        super();
        this.state = {
            id : " ",
            pw : " ",
        };
    }

    goToMain = () => {
        this.props.history.push('/main');
    }  

    handleIdInput = (e) => {
        this.setState({
            id : e.target.value,
        })
    }

    handlePwInput = (e) => {
        this.setState({
            pw : e.target.value,
        })
    }

    render() {
        const validation = this.state.id.includes("@") && this.state.pw.length > 4

        return (
            <div className="Login">
                <div className="box">
                        <h1>Westagram</h1>
                        <input onChange={this.handleIdInput} className="inputBox" type="text" placeholder="전화번호, 사용자 이름 또는 이메일" />
                        <input onChange={this.handlePwInput} className="inputBox" type="password" placeholder="비밀번호" />   
                        <button className="loginButton" onClick={this.goToMain} style={{opacity: validation? "1" : "0.5"}}>로그인</button>
                    
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