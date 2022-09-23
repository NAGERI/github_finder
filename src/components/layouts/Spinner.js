import React, { Fragment } from "react";
import Spinner from "./spinner.gif";

const spinner = () => (
  <Fragment>
    <img
      alt=""
      src={Spinner}
      style={{ width: "200px", margin: "auto", display: "block" }}
    ></img>
  </Fragment>
);

export default spinner;
