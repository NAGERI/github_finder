import React, { Fragment, Component } from "react";
import Navbar from "./components/layouts/Navbar";
import Users from "./components/users/Users";
import "./App.css";

class App extends Component {
  foo = x => x + " bars from foo method"; /* this is an arrow function*/
  render() {
    // const name = "Siogeri";
    // const loading = false;
    // return React.createElement(
    //   "div",   without JSX
    //   { className: "App" },
    //   React.createElement("h1", null, "Hello from a react element")
    // );

    return (
      <div className='App'>
        <Fragment>
          {/* {loading ? <h4>Loading...</h4> : <h1>Hello from react {name} </h1>} */}
          <Navbar icon='fab fa-github' />
          <div className='container'>
            <Users />
          </div>

          {/* <h1>This is {this.foo(21)}</h1>{" "} */}
          {/*this is a class method  comments must be put in this */}
        </Fragment>
      </div>
    );
  }
}

export default App;
