import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './appHeader.css';

export default function AppHeader() {
    const location = useLocation();

    useEffect(() => {
        const currentPath = location.pathname;
        const searchParams = new URLSearchParams(location.search);
    }, [location]);

    return (
        <div className='headerContainer'>
            <div className='headerContent'>
                <ul className='headerNav'>
                    <li className={location.pathname === '/' ? "onClicked" : null}>
                        <Link to='/'>Blog</Link>
                    </li>
                    <li className={location.pathname === '/profile' ? "onClicked" : null}>
                        <Link to='/profile'>Profile</Link>
                    </li>
                    <li><Link to='/'>Github</Link></li>
                    <li><Link to='/'>Login</Link></li>
                </ul>
                <div className="headerTitle">WELCOME TO BLOG</div>
                <div className="headerSubTitle">개발자 블로그에 오신것을 환영합니다</div>
            </div>
        </div>
    )
}
