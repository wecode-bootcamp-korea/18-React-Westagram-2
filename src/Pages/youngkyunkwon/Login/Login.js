import React from 'react';
import './Login.scss';
//import '../../../Styles/common.scss';
//import '../../../Styles/reset.scss';
// eslint-disable-next-line
import { Link } from 'react-router-dom';

class LoginYoungkyun extends React.Component {
    constructor() {
        super();
        this.state= {
            id: "",
            pw: "",
        };
    }

    goToMain = () => {
        const {id, pw} = this.state;
        if(id.includes("@") && pw.length > 4) {
            this.props.history.push("/main-youngkyun");
        }
    }
    
    handleIdValue = (e) => {
        //console.log("바뀌고 있음", e.target.value);
        this.setState({id: e.target.value});
    }

    handlePwValue = (e) => {
        this.setState({pw: e.target.value});
    }

    /*handleInputValue= (e) => {
        //계산된 속성명
        const name = e.target.className;
        this.setState({[name] : e.target.value});
    }*/
    
    checkInput = () => {
        this.state.id.includes("@") && this.state.pw.length > 4?
        this.setState({button: "active"}) :
        this.setState({button: ""})
    };

    render() {
        return (
            <section className= "loginYoungkyun">
                <div className= "loginPage">
                    <div className= "loginSubPage">
                        <h1 class= "loginLogo">westagram</h1>
                    <main>
                        <div className= "loginAll">
                            <div className= "loginForm">
                                <input type= "email" 
                                    className= "loginId" 
                                    name= "user_name" 
                                    placeholder= "전화번호, 사용자 이름 또는 이메일"  
                                    onChange={this.handleIdValue}
                                    onKeyUp= {this.checkInput}
                                />
                                <input type= "password" 
                                    className= "loginPw" 
                                    name= "user_password" 
                                    placeholder= "비밀번호" 
                                    onChange={this.handlePwValue}
                                    onKeyUp= {this.checkInput}
                                />
                            </div>
                            <button type="submit" className= {this.state.button} onClick={this.goToMain}>로그인</button>
                        </div>
                    </main>
                    <footer>
                        <div className= "pwHelp">비밀번호를 잊으셨나요?</div>
                    </footer>
                    </div>
                </div>
            </section>
        );
    }
}

export default LoginYoungkyun;



