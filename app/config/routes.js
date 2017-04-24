// Inclue the React library
import React from 'react'

// Include the react-router module
import { Router, Route, IndexRedirect, IndexRoute } from 'react-router'
import AuthService from '../utils/AuthService'
// Include the browserHistory prop to configure client side routing
// https://github.com/ReactTraining/react-router/blob/master/docs/guides/Histories.md#browserhistory
import { browserHistory } from 'react-router'

// Reference the high-level components
import Main from '../components/Main'
import Search from '../components/Search'
import Saved from '../components/Saved'
import Login from '../components/Login/Login'

const auth = new AuthService('3LCamZNP5ZoREfq5p7sSJapryQ3D7S8y', 'dnhart.auth0.com');

const requireAuth = (nextState, replace) => {
  if (!auth.loggedIn()) {
    replace({ pathname: '/login' })
  }
}

export const makeMainRoutes = () => {
  return (
  // High level component is the Router component.
  <Router history={browserHistory}>
    <Route path="/" component={Main} auth={auth}>

      {/* If user selects Search or Saved show the appropriate component */}
      <Route path="Search" component={Search} onEnter={requireAuth} />
      <Route path="Saved" component={Saved}  />

      {/* If user selects any other path... we get the Home Route */}
      <IndexRoute component={Search} />
      <Route path="login" component={Login} />
    </Route>
  </Router>
  )
}

export default makeMainRoutes