import React, { useState } from 'react'
import './login.css'

// import components
import ProfileInfo from '../../components/ProfileInfo'

const LoginPage = () => {
    const [email, setEmail] = useState('tmdgus2358@gmail.com')
    const [password, setPassword] = useState('1234123412')

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const handleLogIn = () => {
        alert("로그인 기능 구현중입니다. / API 구현 완료.")
    }

    return (
        <div className="login-container">
            <ProfileInfo />
            <div className="login-content-container">
                <div className="login-input-container">
                    <input placeholder="아이디를 입력해주세요" onChange={(e) => handleEmailChange(e)} type="text" value={email} />
                    <hr className="horizontal-line" />
                    <input placeholder="비밀번호 입력해주세요" onChange={(e) => handlePasswordChange(e)} type="password" value={password} />
                </div>
                <div onClick={handleLogIn} className="btn-login">로그인</div>
            </div>
        </div>
    )
}

export default LoginPage