import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

// import common
import appHeader from '../components/common/appHeader'

// import pages
import blogPage from '../pages/blog'
import profilePage from '../pages/profile'
import loginPage from '../pages/login'
import addPostPage from '../pages/write'


export default function RootRouter() {
    return (
        <BrowserRouter>
            <Route path='/' component={appHeader} />
            <Switch>
                <Route path='/blog/:post_id' component={blogPage} />
                <Route path='/blog' component={blogPage} />
                <Route path='/add-post' component={addPostPage} />
                <Route path='/profile' component={profilePage} />
                <Route path='/login' component={loginPage} />
            </Switch>
            <Redirect path="/" to={`/blog`} />
        </BrowserRouter>
    )
}
