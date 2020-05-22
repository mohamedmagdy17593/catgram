import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Login from '../Login/Login'
import PleaseLogin from '../PleaseLogin/PleaseLogin'
import Home from '../Home/Home'
import { useCat } from '../../context/Cat'
import NotFound from '../NotFound/NotFound'

function Routes() {
  let { cat } = useCat()

  if (cat) {
    return (
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    )
  } else {
    return (
      <Switch>
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route>
          <PleaseLogin />
        </Route>
      </Switch>
    )
  }
}

export default Routes
