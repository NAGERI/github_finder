import React, { Fragment, Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    const name = "ONA NAGERI";
    const loading = false;
    // return React.createElement(
    //   "div",   without JSX
    //   { className: "App" },
    //   React.createElement("h1", null, "Hello from a react element")
    // );
    return (
      <div className='App'>
        <Fragment>
          {loading ? <h4>Loading...</h4> : <h1>Hello from react {name} </h1>}
        </Fragment>
      </div>
    );
  }
}

export default App;
