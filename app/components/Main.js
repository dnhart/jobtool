// Include React as a dependency
var React = require("react");
// Including the Link component from React Router to navigate within our application without full page reloads
// https://github.com/ReactTraining/react-router/blob/master/docs/API.md#link
var Link = require("react-router").Link;

// Create the Main component
var Main = React.createClass({

  render: function() {

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
					</ul>
				</div>     
			</div>
		</nav>
      <div className="container">

        <div className="row">
         


          {/* Here we will deploy the sub components (Search or Saved */}
          {/* These sub-components are getting passed as this.props.children */}
          {this.props.children}

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
});

// Export the module back to the route
module.exports = Main;
