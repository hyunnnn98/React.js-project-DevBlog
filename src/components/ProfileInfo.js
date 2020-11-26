import React, { useState, useEffect,  } from 'react'
import { useLocation } from 'react-router-dom'

import classNames from '../utils/classNames'

// import styles
import './ProfileInfo.css';
import profile from '../styles/img/profile.jpg'

export default function ProfileInfo(props) {
    const [profileImg, setProfileImg] = useState(profile)
    const [profileClass, setProfileClass] = useState(null)
    const [userName, setUserName] = useState('SeungHyun Cho')
    const [userStatus, setUserStatus] = useState('luck is the residue of design')
    const location = useLocation();

    useEffect(() => {
        const currentPath = location.pathname;

        setProfileClass(classNames({
            'info-container': true,
            'login-info-container': currentPath === '/login'
        }))
    }, [location]);

    return (
        <div className={profileClass}>
            <div><img src={profileImg} /></div>
            <div>{userName}</div>
            <div>{userStatus}</div>
        </div>
    )
}
