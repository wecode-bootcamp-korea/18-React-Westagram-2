import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./Login.scss";

class LoginJaewook extends Component {
    constructor() {
        super();

        this.state = {
            idValue: "",
            pwValue: "",
            pwInputType: "password",
        };
    }
    handleInputValue = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    clickShowPwBtn = () => {
        this.state.pwInputType === "password"
            ? this.setState({
                  pwInputType: "text",
              })
            : this.setState({
                  pwInputType: "password",
              });
    };

    clickLoginBtn = () => {
        fetch("url", {
            method: "POST",
            body: JSON.stringify({
                username: "jaewook",
                email: this.state.idValue,
                password: this.state.pwValue,
            }),
        })
            .then((response) => response.json())
            .then((result) => console.log(result));
    };
    render() {
        return (
            <div className="LoginPage">
                <section className="login_container">
                    <h1 className="title">Westagram</h1>
                    <form className="contents">
                        <div className="id_box input_box">
                            <input
                                onChange={this.handleInputValue}
                                className="input_id"
                                name="idValue"
                                type="email"
                                placeholder="전화번호, 사용자 이름 또는 이메일"
                            />
                        </div>
                        <div className="pw_box input_box">
                            <input
                                onChange={this.handleInputValue}
                                className="input_pw"
                                name="pwValue"
                                type={this.state.pwInputType}
                                placeholder="비밀번호"
                            />
                            <button
                                onClick={this.clickShowPwBtn}
                                className={
                                    this.state.pwValue
                                        ? "show_pw show_pw_able"
                                        : "show_pw show_pw_disable"
                                }
                                type="button"
                            >
                                {this.state.pwInputType === "password"
                                    ? "비밀번호 표시"
                                    : "비밀번호 숨김"}
                            </button>
                        </div>
                        <button
                            onClick={this.clickLoginBtn}
                            className={
                                this.state.idValue.includes("@") &&
                                this.state.pwValue.length >= 5
                                    ? "submit_btn submit_btn_able"
                                    : "submit_btn submit_btn_disable"
                            }
                            type="button"
                        >
                            로그인
                        </button>
                        <a href="https://en.wikipedia.org/wiki/Help:Reset_password">
                            비밀번호를 잊으셨나요?
                        </a>
                    </form>
                </section>
            </div>
        );
    }
}

export default withRouter(LoginJaewook);
