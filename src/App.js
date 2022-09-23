import React, { Fragment, Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layouts/Navbar";
import Users from "./components/users/Users";
import User from "./components/users/User";
import Search from "./components/users/Search";
import Alert from "./components/layouts/Alert";
import About from "./components/pages/About";
import "./App.css";
import axios from "axios";

class App extends Component {
  // foo = (x) => x + " bars from foo method"; /* this is an arrow function*/
  state = {
    users: [],
    user: {},
    repos: [],
    loading: false,
    alert: null,
  };
  /* Display the first 30 github users
  async componentDidMount() {
    this.setState({ loading: true });
    
    const res = await axios.get(
      `http://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
      );
      
      this.setState({ users: res.data, loading: false });
    }*/
  /**Search github users */
  searchUsers = async (text) => {
    this.setState({ loading: true });
    try {
      const res = await axios.get(
        `http://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
      );
      this.setState({ users: res.data.items, loading: false });
    } catch (e) {
      console.log("Error occured in axios API, GET request :", e);
    } finally {
      this.setState({ loading: false });
    }
  };
  /**Get single user */
  getUser = async (username) => {
    this.setState({ loading: true });
    try {
      const res = await axios.get(
        `http://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
      );
      this.setState({ user: res.data, loading: false });
    } catch (e) {
      console.log("Error occured in axios API, GET request :", e);
    } finally {
      this.setState({ loading: false });
    }
  };
  /**Get User repos */
  getUserRepos = async (username) => {
    this.setState({ loading: true });
    try {
      const res = await axios.get(
        `http://api.github.com/users/${username}/repos?per_page=5&sort=creades:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
      );
      this.setState({ repos: res.data, loading: false });
    } catch (e) {
      console.log("Error occured in axios API, GET request :", e);
    } finally {
      this.setState({ loading: false });
    }
  };
  /**Clear Users from state*/
  clearUsers = () => this.setState({ users: [], loading: false });
  /**Setting the Alert */
  setAlert = (msg, type) => {
    this.setState({ alert: { msg, type } });
    setTimeout(() => {
      this.setState({ alert: null });
    }, 1500);
  };
  render() {
    // const name = "Siogeri";
    // const loading = false;
    // return React.createElement(
    //   "div",   without JSX
    //   { className: "App" },
    //   React.createElement("h1", null, "Hello from a react element")
    // {showName && name} conditional, shows name if showName variable is true
    // );
    const { users, user, repos, loading } = this.state;
    return (
      <div className="App">
        <Router>
          <Fragment>
            <Navbar icon="fab fa-github" />
            <div className="container">
              <Alert alert={this.state.alert} />
              {/* Switch is deprecated component  */}
              <Switch>
                <Route
                  exact
                  path="/"
                  render={(props) => (
                    <Fragment>
                      <Search
                        searchUsers={this.searchUsers}
                        clearUsers={this.clearUsers}
                        showClear={users.length > 0 ? true : false}
                        setAlert={this.setAlert}
                      />
                      <Users loading={loading} users={users} />
                    </Fragment>
                  )}
                />
                <Route exact path="/about" component={About} />
                <Route
                  exact
                  path="/user/:login"
                  render={(props) => (
                    <User
                      {...props}
                      getUser={this.getUser}
                      getUserRepos={this.getUserRepos}
                      user={user}
                      repos={repos}
                      loading={loading}
                    />
                  )}
                />
              </Switch>
            </div>
            {/* {loading ? <h4>Loading...</h4> : <h1>Hello from react {name} </h1>} */}
            {/* <h1>This is {this.foo(21)}</h1>{" "} */}
            {/*this is a class method  comments must be put in this */}
          </Fragment>
        </Router>
      </div>
    );
  }
}

export default App;
