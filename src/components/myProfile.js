import React, { useState, useEffect,  } from 'react'
import { useLocation } from 'react-router-dom'

import classNames from '../utils/classNames'

// import styles
import './MyProfile.css';
import profile from '../styles/img/profile.jpg'

export default function MyProfile(props) {
    const [profileImg, setProfileImg] = useState(profile)
    const [profileClass, setProfileClass] = useState(null)
    const location = useLocation();

    useEffect(() => {
        const currentPath = location.pathname;

        setProfileClass(classNames({
            'profile-container': true,
            'login-profile-container': currentPath === '/login'
        }))
    }, [location]);

    return (
        <div className={profileClass}>
            <div><img src={profileImg} /></div>
            <div>SeungHyun Cho</div>
            <div>luck is the residue of design</div>
        </div>
    )
}
