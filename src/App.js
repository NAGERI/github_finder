import React, { Fragment, Component } from "react";
import Navbar from "./components/layouts/Navbar";
import Users from "./components/users/Users";
import Search from "./components/users/Search";
import "./App.css";
import axios from "axios";

class App extends Component {
  // foo = (x) => x + " bars from foo method"; /* this is an arrow function*/
  state = {
    users: [],
    loading: false,
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
    console.log(process.env.REACT_APP_GITHUB_CLIENT_ID);
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
  render() {
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
        <Fragment>
          {/* {loading ? <h4>Loading...</h4> : <h1>Hello from react {name} </h1>} */}
          <Navbar icon="fab fa-github" />
          <div className="container">
            <Search searchUsers={this.searchUsers} />
            <Users loading={this.state.loading} users={this.state.users} />
          </div>
          {/* <h1>This is {this.foo(21)}</h1>{" "} */}
          {/*this is a class method  comments must be put in this */}
        </Fragment>
      </div>
    );
  }
}

export default App;
