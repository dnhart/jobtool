// Include React as a dependency
import React, { PropTypes as T, Component } from 'react'
// Including the Link component from React Router to navigate within our application without full page reloads
// https://github.com/ReactTraining/react-router/blob/master/docs/API.md#link
// var Link = require("react-router").Link;
import AuthService from '../utils/AuthService';
import {Link} from 'react-router'


// Create the Main component
// var Main = React.createClass({
export class Main extends Component{
  
  //   constructor(props, context) {
  //   super(props, context)
  //   this.state = {
  //     profile: props.auth.getProfile()
  //   }
  //   props.auth.on('profile_updated', (newProfile) => {
  //     this.setState({profile: newProfile})
  //   })
  // }

  logout(){
    const { auth } = T.instanceOf(AuthService)
    this.props.auth.logout()
    this.context.router.push('/login');
  }


  
  render() {
    let children = null;
    if (this.props.children) {
      children = React.cloneElement(this.props.children, {
        auth: this.props.route.auth //sends auth instance from route to children
      })
    }

    return (
      // We can only render a single div. So we need to group everything inside of this main-container one
<div className="main-container">
    
	<div className="container">

		{/*<!-- Navbar -->*/}
		<nav className="navbar navbar-default" role="navigation">
			<div className="container-fluid">
				{/*<!-- Brand and toggle get grouped for better mobile display -->*/}
				<div className="navbar-header">
					<button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
						<span className="sr-only">Toggle navigation</span>
						<span className="icon-bar"></span>
						<span className="icon-bar"></span>
						<span className="icon-bar"></span>
					</button>
					<a className="navbar-brand" href="#">JobTool.com</a>
				</div>

				{/*<!-- Collect the nav links, forms, and other content for toggling -->*/}
				<div className="collapse navbar-collapse navbar-ex1-collapse">
					<ul className="nav navbar-nav navbar-right">
						<li><a href="#">Profile</a></li>
						<li><a href="#">Job Console</a></li>
						<li><a href="#">Search</a></li>
            <li><a href=""  onClick={this.logout.bind(this)}>Logout</a></li>
					</ul>
				</div>     
			</div>
		</nav>
      <div className="container">

        <div className="row">
         


          {/* Here we will deploy the sub components (Search or Saved */}
          {/* These sub-components are getting passed as this.props.children */}
          {children}
        </div>
      </div>
          <footer>
            <hr />
            <p className="pull-right">
           <span id="indeed_at"><a title="Job Search" href="https://www.indeed.com" rel="nofollow" >jobs by <img alt="Indeed" src="https://www.indeed.com/p/jobsearch.gif"/></a></span>
            </p>
          </footer>
        </div>
      </div>
    );
  }
};

// Main.propTypes = {
//    auth: T.instanceOf(AuthService)
//   }

// Export the module back to the route
// module.exports = Main;
export default Main;