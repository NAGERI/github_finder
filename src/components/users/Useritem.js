import React, { Component } from "react";

class Useritem extends Component {
  // constructor() {
  //   super();
  //   console.log("I am a constructor");
  //   this.state = {
  //     id: "id",
  //     login: "mojombo",
  //     avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
  //     html_url: "https://github.com/mojombo"
  //   };
  // } OR
  // state = {
  //   id: "id",
  //   login: "mojombo",
  //   avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
  //   html_url: "https://github.com/mojombo"
  // };
  render() {
    const { login, avatar_url, html_url } = this.props.user; // destructuting
    return (
      <div className='card text-center '>
        <img
          src={avatar_url}
          alt=''
          className='round-img'
          style={{ width: "60px" }}
        />
        <h3>{login}</h3>
        <div>
          <a href={html_url} className='btn btn-dark btn-sm my-1'>
            More about {login}
          </a>
        </div>
      </div>
    );
  }
}

export default Useritem;
