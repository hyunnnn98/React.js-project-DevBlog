import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './appHeader.css';

const AppHeader = () => {
    const location = useLocation();
    const [numberOfPost, setNumberOfPost] = useState(null)

    useEffect(() => {
        const currentPath = location.pathname;
        const postId = currentPath.substring(currentPath.lastIndexOf('/') + 1);
        setNumberOfPost(postId ? postId : null)
        // const searchParams = new URLSearchParams(location.search);
        // console.log(currentPath, `/blog/${postId}`)
    }, [location]);

    return (
        <div className='headerContainer'>
            <div className='headerContent'>
                <ul className='headerNav'>
                    <li className={location.pathname === '/blog' || location.pathname === `/blog/${numberOfPost}` ? "onClicked" : null}>
                        <Link to='/blog'>Blog</Link>
                    </li>
                    <li className={location.pathname === '/profile' ? "onClicked" : null}>
                        <Link to='/profile'>Profile</Link>
                    </li>
                    <li className={location.pathname === '/login' ? "onClicked" : null}><Link to='/login'>MyPage</Link></li>
                    {/* <li className={location.pathname === '/logout' ? "onClicked" : null}>
                        <Link to='/'>Log out</Link>
                    </li> */}
                    <li>
                        <a href="https://github.com/kokomade98" target="_blank">Github</a>
                    </li>
                </ul>
                <div className="headerTitle">DEV HYUN</div>
                <div className="headerSubTitle">해외 가고 싶은 개발자 블로그에 오신것을 환영합니다</div>
            </div>
        </div>
    )
}

export default AppHeader