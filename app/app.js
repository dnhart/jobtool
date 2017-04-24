// Include the Main React Dependencies
import React from 'react'
import ReactDOM from 'react-dom'

import Main from './components/Main'
// Grabs the Routes
import {browserHistory} from 'react-router'
import makeRoutes from './routes'

// Renders the contents according to the route page
// Displays the contents in the div app of index.html
// Note how ReactDOM takes in two parameters (the contents and the location)
// ReactDOM.render(routes, document.getElementById("app"));
// ReactDOM.render(<App />, document.getElementById('app'));


const routes = makeRoutes()

const mountNode = document.querySelector('#app');
ReactDOM.render(
  <Main history={browserHistory}
        routes={routes} />,
mountNode);
