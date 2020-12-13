import React from 'react'
import { BrowserRouter, Route, Redirect } from 'react-router-dom'

// import common
import appHeader from '../components/common/appHeader'

// import pages
import blogPage from '../pages/blog'
import profilePage from '../pages/profile'
import loginPage from '../pages/login'


export default function RootRouter() {
    return (
        <BrowserRouter>
            <Route path='/' component={appHeader} />
            <Route exact path='/blog' component={blogPage} />
            {/* <Route exact path='/blog/:postId' component={blogPage} /> */}
            <Route path='/profile' component={profilePage} />
            <Route path='/login' component={loginPage} />
            <Redirect path="/" to={`/blog`} />
        </BrowserRouter>
    )
}
