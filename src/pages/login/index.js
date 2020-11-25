import React, { useState} from 'react'
import './login.css'

// import components
import MyProfile from '../../components/MyProfile'

export default function LoginPage() {
    const [email, setEmail] = useState('tmdgus2358@gmail.com')
    const [password, setPassword] = useState('1234123412')

    const handelEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handelPasswordChange = (e) => {
        setPassword(e.target.value)
    }

    return (
        <div className="login-container">
            <MyProfile />
            <div className="login-content-container">
                <div className="login-input-container">
                    <input placeholder="아이디를 입력해주세요" onChange={(e) => handelEmailChange(e)} type="text" value={email} />
                    <hr className="horizontal-line" />
                    <input placeholder="비밀번호 입력해주세요" onChange={(e) => handelPasswordChange(e)} type="password" value={password} />
                </div>
                <div className="btn-login">로그인</div>
            </div>
        </div>
    )
}
