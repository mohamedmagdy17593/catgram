import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Login from '../Login/Login'
import PleaseLogin from '../PleaseLogin/PleaseLogin'
import Home from '../Home/Home'
import { useCat } from '../../context/Cat'
import NotFound from '../NotFound/NotFound'
import Profile from '../Profile/Profile'

function Routes() {
  let { cat } = useCat()

  return (
    <Switch>
      <Route exact path="/">
        {cat ? <Home /> : <Redirect to="/login" />}
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/:catUsername">
        <Profile />
      </Route>
      <Route>{cat ? <NotFound /> : <PleaseLogin />}</Route>
    </Switch>
  )
}

export default Routes
