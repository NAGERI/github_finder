import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layouts/Navbar";
import User from "./components/users/User";
import Alert from "./components/layouts/Alert";
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import NotFound from "./components/pages/NotFound";
import GithubState from "./context/github/GithubState";
import AlertState from "./context/alert/AlertState";
import "./App.css";

const App = () => {
  // foo = (x) => x + " bars from foo method"; /* this is an arrow function*/
  /* Display the first 30 github users
  async componentDidMount() {
    this.setState({ loading: true });    
    const res = await axios.get(
      `http://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
      );      
      this.setState({ users: res.data, loading: false });
    }*/
  // const name = "Siogeri";
  // const loading = false;
  // return React.createElement(
  //   "div",   without JSX
  //   { className: "App" },
  //   React.createElement("h1", null, "Hello from a react element")
  // {showName && name} conditional, shows name if showName variable is true
  // );

  return (
    <div className="App">
      <GithubState>
        <AlertState>
          <Router>
            <Fragment>
              <Navbar icon="fab fa-github" title="GitHub Finder" />
              <div className="container">
                <Alert />
                {/* Switch is deprecated component  */}
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/about" component={About} />
                  <Route exact path="/user/:login" component={User} />
                  <Route component={NotFound} />
                </Switch>
              </div>
              {/* {loading ? <h4>Loading...</h4> : <h1>Hello from react {name} </h1>} */}
              {/* <h1>This is {this.foo(21)}</h1>{" "} */}
              {/*this is a class method  comments must be put in this */}
            </Fragment>
          </Router>
        </AlertState>
      </GithubState>
    </div>
  );
};

export default App;
