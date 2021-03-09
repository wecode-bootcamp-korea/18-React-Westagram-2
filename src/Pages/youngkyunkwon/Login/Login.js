import React from 'react';
import './Login.scss';
import '../../../Styles/common.scss';
import '../../../Styles/reset.scss';
import { Link } from 'react-router-dom';

class LoginYoungkyun extends React.Component {
    constructor() {
        super();
        this.state= {
            id: "",
            pw: ""
        };
    }

    goToMain = () => { 
        const {id, pw} = this.state;
        if(id.length > 0 && pw.length > 0) {
            this.props.history.push("/main");
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
        if(this.state.id.includes("@") && this.state.pw.lengh > 4) {
            this.setState({color: "blue"});
        }
        if(this.state.id || this.state.pw) {
            this.setState({color: "orange"});
        }
    };

    checkValidData = () => {
        return this.state.id.includes("@") && this.state.pw.length > 4
    };

    render() {
        console.log(this.state);
        return (
            <section className= "LoginYoungkyun">
                <div className= "layout">
                    <header>
                        <div className= "instagram">
                            <Link to ='/main-youngkyun'>
                            <h1>westagram</h1>
                            </Link>
                        </div>
                    </header>
                    <main>
                        <div className= "input">
                            <div className= "name">
                                <input type= "email" 
                                    className= "id" 
                                    name= "user_name" 
                                    placeholder= "전화번호, 사용자 이름 또는 이메일"  
                                    onChange={this.handleIdValue}
                                    onKeyUp= {this.checkInput}
                                />
                            <br/>
                                <input type= "password" 
                                    className= "pw" 
                                    name= "user_password" 
                                    placeholder= "비밀번호" 
                                    onChange={this.handlePwValue}
                                    onKeyUp= {this.checkInput}
                                />
                            </div>
                            <div>
                                <button type="summit" onClick={this.goToMain}>로그인</button>
                            </div>
                        </div>
                    </main>
                    <footer>
                        <div className= "forget">비밀번호를 잊으셨나요?</div>
                    </footer>
                </div>
            </section>
        );
    }
}

export default LoginYoungkyun;



