import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./Login.scss";

class LoginJaewook extends Component {
    constructor() {
        super();

        this.state = {
            idValue: "",
            pwValue: "",
            btnOpacity: 0.3,
            display: "none",
            pwInputType: "password",
        };
    }
    handleIdInput = async (e) => {
        await this.setState({
            idValue: e.target.value,
        });
        await this.changeBtnColor();
    };

    handlePwInput = async (e) => {
        await this.setState({
            pwValue: e.target.value,
        });
        await this.changeBtnColor();
        await this.showCheckPwBtn();
    };

    changeBtnColor = () => {
        this.state.idValue.includes("@") && this.state.pwValue.length >= 5
            ? this.setState({ btnOpacity: 1 })
            : this.setState({ btnOpacity: 0.3 });
    };

    showCheckPwBtn = () => {
        this.state.pwValue
            ? this.setState({
                  display: "flex",
              })
            : this.setState({
                  display: "none",
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
    render() {
        return (
            <div className="LoginPage">
                <section className="login_container">
                    <h1 className="title">Westagram</h1>
                    <form className="contents">
                        <div className="id_box input_box">
                            <input
                                onChange={this.handleIdInput}
                                className="input_id"
                                type="email"
                                placeholder="전화번호, 사용자 이름 또는 이메일"
                            />
                        </div>
                        <div className="pw_box input_box">
                            <input
                                onChange={this.handlePwInput}
                                className="input_pw"
                                type={this.state.pwInputType}
                                placeholder="비밀번호"
                            />
                            <button
                                onClick={this.clickShowPwBtn}
                                style={{ display: this.state.display }}
                                className="show_pw"
                                type="button"
                            >
                                비밀번호 표시
                            </button>
                        </div>
                        <button
                            className="submit_btn"
                            style={{ opacity: this.state.btnOpacity }}
                            type="submit"
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
