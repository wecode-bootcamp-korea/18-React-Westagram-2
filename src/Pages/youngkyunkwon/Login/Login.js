import React from 'react';
import './Login.css'
import { Link } from 'react-router-dom';

class Login extends React.Component {
    render() {
        return (
            <section>
                <div className= "layout">
                    <header>
                        <div className= "instagram">
                            <h1>westagram</h1>
                        </div>
                    </header>
                    <main>
                        <div className= "input">
                            <div className= "name">
                                <input type= "text" name= "user_name" placeholder= "전화번호, 사용자 이름 또는 이메일" class= "inlineToBlock" /><br />
                                <input type= "password" name= "user_password" placeholder= "비밀번호" class= "inlineToBlock" />
                            </div>
                            <div>
                                <button type="button" className="login"><Link to="/main">로그인</Link></button>
                            </div>
                        </div>
                    </main>
                    <footer>
                        <div className= "forget">비밀번호를 잊으셨나요?</div>
                    </footer>
                </div>
            </section>
        )
    }
}

export default Login;


