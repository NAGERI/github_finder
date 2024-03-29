/* eslint-disable no-unused-vars */
import React, { useReducer } from "react";
import axios from "axios";
import GithubContext from "./githubContext";
import GithubReducer from "./githubReducer";
import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_REPOS,
  GET_USER,
} from "../types";

let githubClientId;
let githubClientSecret;

if (process.env.NODE_ENV !== "production") {
  githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
  githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
} else {
  githubClientId = process.env.GITHUB_CLIENT_ID;
  githubClientSecret = process.env.GITHUB_CLIENT_SECRET;
}

const GithubState = (props) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  /**Search Users */
  const searchUsers = async (text) => {
    setLoading();
    try {
      const res = await axios.get(
        `https://api.github.com/search/users?q=${text}&client_id=${githubClientId}&client_secret=${githubClientSecret}`
      );
      dispatch({
        type: SEARCH_USERS,
        payload: res.data.items,
      });
    } catch (e) {
      console.log("Error occured in axios API, GET request :", e.message);
    }
  };
  /**Get single user */
  const getUser = async (username) => {
    try {
      const res = await axios.get(
        `https://api.github.com/users/${username}?client_id=${githubClientId}&client_secret=${githubClientSecret}`
      );

      dispatch({
        type: GET_USER,
        payload: res.data,
      });
    } catch (e) {
      console.log("Error occured in axios API, GET request :", e.message);
    }
  };
  /**Get User repos */
  const getUserRepos = async (username) => {
    try {
      const res = await axios.get(
        `https://api.github.com/users/${username}/repos?per_page=5&sort=creades:asc&client_id=${githubClientId}&client_secret=${githubClientSecret}`
      );
      dispatch({
        type: GET_REPOS,
        payload: res.data,
      });
    } catch (e) {
      console.log("Error occured in axios API, GET request :", e);
    }
  };
  // Clear Users
  const clearUsers = () => dispatch({ type: CLEAR_USERS });
  // setLoading
  const setLoading = () => dispatch({ type: SET_LOADING });
  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUsers,
        clearUsers,
        getUser,
        getUserRepos,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
