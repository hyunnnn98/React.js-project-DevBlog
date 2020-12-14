import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

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
            <Switch>
                <Route path='/blog/:id' component={blogPage} />
                <Route path='/blog' component={blogPage} />
                <Route path='/profile' component={profilePage} />
                <Route path='/login' component={loginPage} />
            </Switch>
            {/* <Redirect path="/" to={`/blog`} /> */}
        </BrowserRouter>
    )
}
