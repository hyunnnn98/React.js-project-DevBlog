import React from 'react'
import './appHeader.css';

export default function appHeader() {
    return (
        <div className='headerContainer'>
            <div className='headerContent'>
                <ul className='headerNav'>
                    <li className='onClicked'>Blog</li>
                    <li>Profile</li>
                    <li>Github</li>
                    <li>Login</li>
                </ul>
                <div className="headerTitle">WELCOME TO BLOG</div>
                <div className="headerSubTitle">개발자 블로그에 오신것을 환영합니다</div>
            </div>
        </div>
    )
}
