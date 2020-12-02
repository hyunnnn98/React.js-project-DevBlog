import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

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
            <Route exact path='/' component={blogPage} />
            <Route exact path='/blog/:id' component={blogPage} />
            <Route path='/profile' component={profilePage} />
            <Route path='/login' component={loginPage} />
        </BrowserRouter>
    )
}
